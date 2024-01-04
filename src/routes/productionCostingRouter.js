import express from "express";

import bpController from "../controller/businessPlanController.js";
import tokenVerify from "../middleware/auth.jwt.js";
import supplierController from "../controller/supplierController.js";
import multer from "multer";
import productionCostingController from "../controller/productionCostingController.js";

const productionCostingRouter = express.Router();

productionCostingRouter.get("/", tokenVerify, productionCostingController.getProductionMonthlyCosting);
productionCostingRouter.get("/is_present", tokenVerify, productionCostingController.checkIfCostingExists);
productionCostingRouter.post("/", productionCostingController.addProductionMonthlyCosting);
productionCostingRouter.put("/update", tokenVerify, productionCostingController.updateProductionMonthlyCosting);

export default productionCostingRouter;
