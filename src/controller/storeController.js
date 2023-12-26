import asyncHandler from "express-async-handler";
import { getEBOStoresByRegion, getEBOStoresByBrand } from "../models/BigQuery/eboStoreMaster.modal.js";
import { categoryBydivision, subCategoryByDivisionDepartment } from "../models/BigQuery/itemMaster.modal.js";

const getEBOStoreDetails = asyncHandler(async (req, res) => {
	const region = req.query.region;
	console.log(region);
	try {
		const rows = await getEBOStoresByRegion(region);
		return res.status(200).json(rows);
	} catch (error) {
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});

const EBOStoresByBrand = asyncHandler(async (req, res) => {
	const brand = req.query.brand.split("%2").join(" ");
	// console.log(brand)
	try {
		const rows = await getEBOStoresByBrand(brand);
		return res.status(200).json(rows);
	} catch (error) {
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
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

export default {
	getEBOStoreDetails,
	EBOStoresByBrand,
	getCategoryBydivision,
	getSubCategoryByDivisionDepartment,
};
