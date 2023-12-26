import express from "express";

import bpController from "../controller/businessPlanController.js";
import tokenVerify from "../middleware/auth.jwt.js";
import vendorController from "../controller/vendorController.js";
import multer from "multer";

const upload = multer();

const vendorFormRouter = express.Router();

vendorFormRouter.post("/file_upload", upload.array("files"), vendorController.vendorFileUpload);
vendorFormRouter.get("/", upload.array("files"), vendorController.getAllVendors);
vendorFormRouter.post("/", vendorController.addVendor);

export default vendorFormRouter;
