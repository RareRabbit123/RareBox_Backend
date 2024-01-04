export default (sequelize, DataTypes) => {
	return sequelize.define(
		"production_costing",
		{
			month: {
				type: DataTypes.DATE,
				field: "month",
			},
			salary_liability: {
				type: DataTypes.INTEGER,
				field: "salary_liability",
			},
			electricity: {
				type: DataTypes.INTEGER,
				field: "electricity",
			},
			electricity_warehouse: {
				type: DataTypes.INTEGER,
				field: "electricity_warehouse",
			},
			diesel: {
				type: DataTypes.INTEGER,
				field: "diesel",
			},
			petty_cash: {
				type: DataTypes.INTEGER,
				field: "petty_cash",
			},
			leave_encashment: {
				type: DataTypes.INTEGER,
				field: "leave_encashment",
				allowNull: false,
			},
			bonus: {
				type: DataTypes.INTEGER,
				field: "bonus",
			},
			gratuity: {
				type: DataTypes.INTEGER,
				field: "gratuity",
			},
			notice_period_deduction: {
				type: DataTypes.INTEGER,
				field: "notice_period_deduction",
			},
			stp_mantainance_charges: {
				type: DataTypes.INTEGER,
				field: "stp_mantainance_charges",
			},
			insurance: {
				type: DataTypes.INTEGER,
				field: "insurance",
			},
			internet: {
				type: DataTypes.INTEGER,
				field: "internet",
			},
			other_expences: {
				type: DataTypes.INTEGER,
				field: "other_expences",
			},
			piece_work_charges: {
				type: DataTypes.INTEGER,
				field: "piece_work_charges",
			},
			ho_Rareism_tailor: {
				type: DataTypes.INTEGER,
				field: "ho_Rareism_tailor",
			},
			total_salary: {
				type: DataTypes.INTEGER,
				field: "total_salary",
			},
			re_pack_RTVprod: {
				type: DataTypes.INTEGER,
				field: "re_pack_RTVprod",
			},
			re_barcoding_wh_goods: {
				type: DataTypes.INTEGER,
				field: "re_barcoding_wh_goods",
			},
			re_chk_salsa: {
				type: DataTypes.INTEGER,
				field: "re_chk_salsa",
			},
			rr_sample_prod: {
				type: DataTypes.INTEGER,
				field: "rr_sample_prod",
			},
			total_prod_cost: {
				type: DataTypes.INTEGER,
				field: "total_prod_cost",
			},
			production_for_month: {
				type: DataTypes.INTEGER,
				field: "production_for_month",
			},
			cost_per_pc: {
				type: DataTypes.INTEGER,
				field: "cost_per_pc",
			},
			average_tailor: {
				type: DataTypes.INTEGER,
				field: "average_tailor",
			},
			average_total_strength: {
				type: DataTypes.INTEGER,
				field: "average_total_strength",
			},
			total_production_for_month: {
				type: DataTypes.INTEGER,
				field: "total_producetion_for_month",
			},
			is_verified: {
				type: DataTypes.BOOLEAN,
				field: "is_verified",
				defaultValue: false,
			},
		},
		{
			timestamps: true,
			underscored: true,
			tableName: "production_costing",
		}
	);
};
