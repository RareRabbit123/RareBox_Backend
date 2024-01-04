import express from "express";

import bpController from "../controller/businessPlanController.js";
import tokenVerify from "../middleware/auth.jwt.js";

const bpRouter = express.Router();

bpRouter.post("/", tokenVerify, bpController.createNewBusinessPlan);
bpRouter.get("/", tokenVerify, bpController.getBusinessPlan);

// bpRouter.post("/season_level_bp", bpController.insertForSeasonLevelBpTable);
// bpRouter.get("/season_level_bp", bpController.getForSeasonLevelBpTable);

// bpRouter.get('/EBO',bpController.getEBOStoreDetails);
// bpRouter.get('/EBO_by_brand',bpController.EBOStoresByBrand);
// bpRouter.get("/cat_by_div", bpController.getCategoryBydivision);
// bpRouter.get("/subCat_by_div_dep", bpController.getSubCategoryByDivisionDepartment);
// bpRouter.get("/mrp_by_subCat", bpController.getMrpBYSubCategory);

export default bpRouter;
