import asyncHandler from "express-async-handler";
import { uploadFileToGCS, uploadSupplierFileToGCS } from "../config/fileUploader/fileUploader.js";
import supplierTable, { allSuppliers } from "../models/BigQuery/supplierDetails.modal.js";
import { models } from "../models/index.js";

const addProductionMonthlyCosting = asyncHandler(async (req, res) => {
	const body = req.body;

	try {
		const result = await models.productionCosting.create(body);
		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		console.log(error);
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: "error", error: "already submitted" });
		}
		// throw error;
	}
});
const checkIfCostingExists = asyncHandler(async (req, res) => {
	const date = req.query.date;

	try {
		const costing = await models.productionCosting.findOne({ where: { month: date } });
		if (costing)
			res.status(200).json({
				status: "success",
				isPresent: true,
			});
		else
			res.status(200).json({
				status: "success",
				isPresent: false,
			});
	} catch (error) {
		console.log(error);
		return res.json({ status: "error", error: "Internal Server Error" });
	}
});

const updateProductionMonthlyCosting = asyncHandler(async (req, res) => {
	const body = req.body;
	try {
		await models.productionCosting.update(body, { where: { id: body.id } });

		res.status(200).json({ status: "Success", massage: "Supplier Updated Successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});

const getProductionMonthlyCosting = asyncHandler(async (req, res) => {
	const id = req.query.id;

	try {
		if (id) {
			const result = await models.productionCosting.findAll({
				where: { id: id },
				attributes: { exclude: ["createdAt", "updatedAt"] },
				order: [["id", "DESC"]],
			});
			console.log("first");
			return res.status(200).json(result);
		} else {
			const result = await models.productionCosting.findAll({
				attributes: { exclude: ["createdAt", "updatedAt"] },
				order: [["id", "DESC"]],
			});
			console.log("first");
			return res.status(200).json(result);
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: "error", error: error });
	}
});

export default {
	addProductionMonthlyCosting,
	getProductionMonthlyCosting,
	updateProductionMonthlyCosting,
	checkIfCostingExists,
};
