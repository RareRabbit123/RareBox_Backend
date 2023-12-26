import express from "express";

import bpController from "../controller/businessPlanController.js";
import tokenVerify from "../middleware/auth.jwt.js";
import supplierController from "../controller/supplierController.js";
import multer from "multer";

const upload = multer();

const supplierRouter = express.Router();

supplierRouter.post("/file_upload", upload.array("files"), supplierController.supplierFileUpload);
supplierRouter.get("/", tokenVerify, supplierController.getAllSuppliers);
supplierRouter.post("/", supplierController.addSupplier);
supplierRouter.put("/update", tokenVerify, supplierController.updateSupplier);

supplierRouter.post("/bquery_upload", tokenVerify, supplierController.addSupplierBquery);

export default supplierRouter;
