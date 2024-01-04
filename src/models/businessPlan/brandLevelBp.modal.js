export default (sequelize, DataTypes) => {
	return sequelize.define(
		"brand_level_bp",
		{
			brand: {
				type: DataTypes.STRING(120),
				field: "brand",
			},
			sub_brand: {
				type: DataTypes.STRING(120),
				field: "sub_brand",
			},
			division: {
				type: DataTypes.STRING(140),
				field: "division",
			},
			total_qty: {
				type: DataTypes.INTEGER,
				field: "total_qty",
				defaultValue: 0,
			},
			total_mrp: {
				type: DataTypes.INTEGER,
				field: "total_mrp",
				defaultValue: 0,
			},
			total_count: {
				type: DataTypes.SMALLINT,
				field: "total_count",
			},
			current_count: {
				type: DataTypes.SMALLINT,
				field: "current_count",
				defaultValue: 0,
			},
			is_verified: {
				type: DataTypes.BOOLEAN,
				field: "is_verified",
				defaultValue: false,
			},
			is_submitted: {
				type: DataTypes.BOOLEAN,
				field: "is_submitted",
				defaultValue: false,
			},
		},
		{
			timestamps: true,
			underscored: true,
			tableName: "brand_level_bp",
		}
	);
};
