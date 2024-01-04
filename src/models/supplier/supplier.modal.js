export default (sequelize, DataTypes) => {
	return sequelize.define(
		"supplier",
		{
			supplier_name: {
				type: DataTypes.STRING,
				field: "supplier_name",
			},
			company_name: {
				type: DataTypes.STRING,
				field: "company_name",
			},
			supplier_nature: {
				type: DataTypes.STRING(100),
				field: "supplier_nature",
			},
			company_type: {
				type: DataTypes.STRING(100),
				field: "company_type",
			},
			no_of_factory: {
				type: DataTypes.INTEGER,
				field: "no_of_factory",
			},
			gst_no: {
				type: DataTypes.STRING(50),
				field: "gst_no",
				allowNull: false,
			},
			name_of_owner: {
				type: DataTypes.STRING(100),
				field: "name_of_owner",
			},
			gender: {
				type: DataTypes.STRING(40),
				field: "gender",
			},
			position: {
				type: DataTypes.STRING(50),
				field: "position",
			},
			office_address: {
				type: DataTypes.STRING(50),
				field: "office_address",
			},
			office_state: {
				type: DataTypes.STRING(50),
				field: "office_state",
			},
			office_city: {
				type: DataTypes.STRING(50),
				field: "office_city",
			},
			office_pin_code: {
				type: DataTypes.INTEGER,
				field: "office_pin_code",
			},
			factory_address: {
				type: DataTypes.STRING,
				field: "factory_address",
			},
			factory_state: {
				type: DataTypes.STRING(50),
				field: "factory_state",
			},
			factory_city: {
				type: DataTypes.STRING(50),
				field: "factory_city",
			},
			factory_pin_code: {
				type: DataTypes.INTEGER,
				field: "factory_pin_code",
			},
			monthly_capacity: {
				type: DataTypes.INTEGER,
				field: "monthly_capacity",
			},
			capacity_for_thor: {
				type: DataTypes.INTEGER,
				field: "capacity_for_thor",
			},
			no_of_labour: {
				type: DataTypes.INTEGER,
				field: "no_of_labour",
			},
			labour_roll: {
				type: DataTypes.STRING(50),
				field: "labour_roll",
			},
			company_establishment_date: {
				type: DataTypes.DATE,
				field: "company_establishment_date",
			},
			factory_liscence_no: {
				type: DataTypes.STRING(100),
				field: "factory_liscence_no",
			},
			factory_liscence_expiry_date: {
				type: DataTypes.DATE,
				field: "factory_liscence_expiry_date",
			},
			compliance_certificate_issuer: {
				type: DataTypes.STRING(100),
				field: "compliance_certificate_issuer",
			},
			compliance_certificate_issue_date: {
				type: DataTypes.DATE,
				field: "compliance_certificate_issue_date",
			},
			compliance_certificate_exp_date: {
				type: DataTypes.DATE,
				field: "compliance_certificate_exp_date",
			},
			website_link: {
				type: DataTypes.STRING(100),
				field: "website_link",
			},
			email: {
				type: DataTypes.STRING(100),
				field: "email",
			},
			mobile_no_primary: {
				type: DataTypes.STRING(100),
				field: "mobile_no_primary",
			},
			mobile_no_secondary: {
				type: DataTypes.STRING(100),
				field: "mobile_no_secondary",
			},
			pan_no: {
				type: DataTypes.STRING(30),
				field: "pan_no",
			},
			bank_name: {
				type: DataTypes.STRING(30),
				field: "bank_name",
			},
			bank_ifsc_code: {
				type: DataTypes.STRING(30),
				field: "bank_ifsc_code",
			},
			bank_acc_no: {
				type: DataTypes.STRING(40),
				field: "bank_acc_no",
			},
			micr_code: {
				type: DataTypes.STRING(50),
				field: "micr_code",
			},
			rtgs_code: {
				type: DataTypes.STRING(50),
				field: "rtgs_code",
			},
			industry_type: {
				type: DataTypes.STRING(60),
				field: "industry_type",
			},
			files: {
				type: DataTypes.JSON,
				field: "files",
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
			tableName: "supplier",
		}
	);
};
