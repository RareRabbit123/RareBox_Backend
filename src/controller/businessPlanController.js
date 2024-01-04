import asyncHandler from "express-async-handler";
import SeasonLevelBpTable, { getFromSeasonLevelBP } from "../models/BigQuery/BusinessPlan/seasonLevelBp.modal.js";
import { categoryBydivision, subCategoryByDivisionDepartment } from "../models/BigQuery/itemMaster.modal.js";
import BrandLevelBpTable from "../models/BigQuery/BusinessPlan/brandLevelBp.js";
import { models } from "../models/index.js";

const createNewBusinessPlan = asyncHandler(async (req, res) => {
	const { season, total_count, channels } = req.body;

	if (!season || typeof season !== "string") {
		return res.json({ status: "error", error: "Invalid Season Name" });
	} else {
		const isPresent = await models.businessPlan.findOne({
			where: { season },
		});
		if (isPresent) return res.status(403).json({ status: "error", error: "Business Plan already exists" });
	}

	try {
		const result = await models.businessPlan.create(
			{ season, total_count, bPlanChannels: channels },
			{
				include: [
					{
						association: "bPlanChannels",
						include: [{ association: "channelSubbrands" }],
					},
				],
			}
		);
		console.log(result);
		return res.status(200).json({
			result,
		});
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: "error", error: "Season Already Exists" });
		}
		throw error;
	}
});
const getBusinessPlan = asyncHandler(async (req, res) => {
	const id = req.query.id;

	let plan;

	if (id)
		plan = await models.businessPlan.findOne({
			where: { id },
		});
	else {
		plan = await models.businessPlan.findAll({
			include: [
				{
					association: "bPlanChannels",
					include: [{ association: "channelSubbrands" }],
				},
			],
		});
	}

	return res.status(200).json({
		status: "success",
		business_plan: plan,
	});
});

const insertForSeasonLevelBpTable = asyncHandler(async (req, res) => {
	const sentBody = req.body;

	const newBody = {
		id: sentBody.id,
		season: sentBody.season,
		channel: sentBody.channel,
		total_qty: sentBody.total_qty,
		total_mrp: sentBody.total_mrp,
		is_verified: sentBody.is_verified,
		is_submitted: sentBody.is_submitted,
		status: sentBody.status,
	};

	try {
		await SeasonLevelBpTable.insert(newBody, async function (err, response) {
			if (err) return res.status(500).json(err);
			else
				await BrandLevelBpTable.insert(sentBody.brandTbRows, function (err, response) {
					if (err) return res.status(500).json(err);
					else return res.status(200).json(response);
				});
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});

const getForSeasonLevelBpTable = asyncHandler(async (req, res) => {
	const season = req.query.season;
	const channel = req.query.channel;
	try {
		if (season && channel) {
			const rows = await getFromSeasonLevelBP(season, channel);
			return res.status(200).json(rows);
		}
		if (season) {
			const rows = await getFromSeasonLevelBP(season, "");
			return res.status(200).json(rows);
		}
		if (channel) {
			const rows = await getFromSeasonLevelBP("", channel);
			return res.status(200).json(rows);
		}

		const rows = await getFromSeasonLevelBP("", "");
		return res.status(200).json(rows);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: "error", error });
	}
});

const getCategoryBydivision = asyncHandler(async (req, res) => {
	const division = req.query.division;
	const brand = req.query.brand;

	try {
		const rows = await categoryBydivision(division, brand);
		return res.status(200).json(rows);
	} catch (error) {
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});

const getSubCategoryByDivisionDepartment = asyncHandler(async (req, res) => {
	const division = req.query.division;
	const department = req.query.department;
	const brand = req.query.brand;

	try {
		const rows = await subCategoryByDivisionDepartment(division, department, brand);
		return res.status(200).json(rows);
	} catch (error) {
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});
const getMrpBYSubCategory = asyncHandler(async (req, res) => {
	const division = req.query.division;
	const department = req.query.department;
	const brand = req.query.brand;
	const subCategory = req.query.subCategory;

	try {
		const rows = await subCategoryByDivisionDepartment(division, department, brand, subCategory);
		return res.status(200).json(rows);
	} catch (error) {
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});

export default {
	createNewBusinessPlan,
	getBusinessPlan,
	insertForSeasonLevelBpTable,
	getForSeasonLevelBpTable,
	getCategoryBydivision,
	getSubCategoryByDivisionDepartment,
	getMrpBYSubCategory,
};
