import { Sequelize } from "sequelize";
import UsersModel from "./users.modal.js";
import BusinessPlanModal from "./businessPlan/businessPlan.modal.js";
import ChannelLevelBpModal from "./businessPlan/channelLevelBp.modal.js";
import BrandLevelBpModal from "./businessPlan/brandLevelBp.modal.js";
import SupplierModal from "./supplier/supplier.modal.js";
import CategoryLevelBpModal from "./businessPlan/categoryLevelBp.modal.js";
import dBConfig from "../config/dbConfig.js";
import OwnProductionCostingModal from "./ownProductionCosting/ownProductionCosting.modal.js";

const sequelize = new Sequelize(dBConfig.database, dBConfig.user, dBConfig.password, {
	host: dBConfig.host,
	// port: dBConfig.port,
	dialect: "mysql",
	logging: false,
	// dialectOptions: {
	// 	options: {
	// 		encrypt: true,
	// 	},
	// },

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

const models = {
	user: UsersModel(sequelize, Sequelize.DataTypes),
	businessPlan: BusinessPlanModal(sequelize, Sequelize.DataTypes),
	ChannelLevelBp: ChannelLevelBpModal(sequelize, Sequelize.DataTypes),
	brandLevelBp: BrandLevelBpModal(sequelize, Sequelize.DataTypes),
	categoryLevelBp: CategoryLevelBpModal(sequelize, Sequelize.DataTypes),
	supplier: SupplierModal(sequelize, Sequelize.DataTypes),
	productionCosting: OwnProductionCostingModal(sequelize, Sequelize.DataTypes),
};

// Every user has a profile
models.businessPlan.hasMany(models.ChannelLevelBp, {
	as: "bPlanChannels",
});
models.ChannelLevelBp.hasMany(models.brandLevelBp, {
	// foreignKey: "channel_level_bp_id",
	as: "channelSubbrands",
});

models.brandLevelBp.hasMany(models.categoryLevelBp);

sequelize.sync({ alter: true }).then(() => {
	console.log("yes re-sync done!");
});

export default sequelize;
export { models };
