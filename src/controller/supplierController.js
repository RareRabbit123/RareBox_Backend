import asyncHandler from "express-async-handler";
import { uploadFileToGCS, uploadSupplierFileToGCS } from "../config/fileUploader/fileUploader.js";
import supplierTable, { allSuppliers } from "../models/BigQuery/supplierDetails.modal.js";
import { models } from "../models/index.js";

const supplierFileUpload = asyncHandler(async (req, res) => {
	const promises = [];
	const files = req.files;

	if (!files) return res.status(404).json({ status: "error", error: "No files to upload" });
	files.forEach((file, index) => {
		promises.push(uploadSupplierFileToGCS(file.originalname, file.buffer, file.mimetype));
	});

	const links = await Promise.all(promises);
	// console.log(links);

	return res.status(200).json(links);
});

const addSupplier = asyncHandler(async (req, res) => {
	const body = req.body;
	// console.log("body", body);

	try {
		const result = await models.supplier.create(body);
		// console.log("result", body);
		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		console.log(error);
		// if (error.code === 11000) {
		// duplicate key
		// 	return res.json({ status: "error", error: "already submitted" });
		// }
		// throw error;
	}
});

const addSupplierBquery = asyncHandler(async (req, res) => {
	const body = { id: new Date().valueOf(), ...req.body };
	// console.log(body);
	try {
		await supplierTable.insert(body, function (err, response) {
			console.log(err);
			//   console.log(response);
			if (err) return res.status(500).json(err);
			else return res.status(200).json(response);
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
});
const updateSupplier = asyncHandler(async (req, res) => {
	const body = req.body;
	try {
		await models.supplier.update(body, { where: { id: body.id } });

		res.status(200).json({ status: "Success", massage: "Supplier Updated Successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: "error", error: "Internal Server Error" });
	}
	// return res.status(200);
});

const getAllSuppliers = asyncHandler(async (req, res) => {
	const id = req.query.id;
	try {
		const result = await models.supplier.findAll({
			attributes: { exclude: ["created_at", "updated_at"] },
			order: [["id", "DESC"]],
		});
		console.log("first");
		return res.status(200).json(result);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ status: "error", error: error });
	}
});

export default { supplierFileUpload, addSupplier, getAllSuppliers, addSupplierBquery, updateSupplier };
