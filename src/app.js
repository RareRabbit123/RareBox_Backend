import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import bpRouter from "./routes/businessPlanRouter.js";
// import vendorFormRouter from "./routes/vendorFormRouter.js";
import { InsertData, allCustomerInfo } from "./models/BigQuery/lucent.modal.js";
import supplierRouter from "./routes/supplierRouter.js";

const corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true,
	optionSuccessStatus: 200,
};

const app = express();

// middleware
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/v1", indexRouter);
app.use("/api/auth", authRouter);

app.use("/api/business_plan", bpRouter);
// app.use("/api/vendor_form", vendorFormRouter);
app.use("/api/supplier", supplierRouter);
app.get("/api/customers", (req, res) => allCustomerInfo(req, res));
app.post("/api/customers", (req, res) => InsertData(req, res));

export default app;
