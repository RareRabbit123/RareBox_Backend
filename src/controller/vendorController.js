import asyncHandler from "express-async-handler";
import { uploadFileToGCS } from "../config/fileUploader/fileUploader.js";
import vendorTable, { allVendors } from "../models/BigQuery/vendor.modal.js";

const vendorFileUpload = asyncHandler(async (req, res) => {
	const promises = [];
	const files = req.files;

	if (!files) return res.status(404).json({ status: "error", error: "No files to upload" });
	files.forEach((file) => {
		promises.push(uploadFileToGCS(file.originalname.split(" ").join("_"), file.buffer, file.mimetype));
	});

	const links = await Promise.all(promises);
	console.log(links);

	return res.status(200).json(links);
});
const addVendor = asyncHandler(async (req, res) => {
	const body = { id: new Date().valueOf(), ...req.body };
	console.log(body);
	try {
		await vendorTable.insert(body, function (err, response) {
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
const getAllVendors = asyncHandler(async (req, res) => {
	const id = req.query.id;
	try {
		if (id) {
			const rows = await allVendors(id);
			return res.status(200).json(rows);
		} else {
			const rows = await allVendors();
			return res.status(200).json(rows);
		}
	} catch (error) {
		// console.log(error)
		return res.status(500).json({ status: "error", error: error });
	}
});

export default { vendorFileUpload, addVendor, getAllVendors };
