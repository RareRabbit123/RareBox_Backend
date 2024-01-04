export default (sequelize, DataTypes) => {
	return sequelize.define(
		"mrp_level_bp",
		{
			mrp: {
				type: DataTypes.INTEGER,
				field: "mrp",
				allowNull: false,
			},
			quantity: {
				type: DataTypes.INTEGER,
				field: "quantity",
				allowNull: false,
			},
			sale_through_percent: {
				type: DataTypes.FLOAT,
				field: "sale_through_percent",
			},
			max_quantity: {
				type: DataTypes.INTEGER,
				field: "max_quantity",
			},
			discount_percent: {
				type: DataTypes.FLOAT,
				field: "discount_percent",
				allowNull: false,
			},
			month: {
				type: DataTypes.STRING(50),
				field: "month",
				allowNull: false,
			},
			store_code: {
				type: DataTypes.STRING(100),
				field: "store_code",
				allowNull: false,
			},
		},
		{
			timestamps: true,
			underscored: true,
			tableName: "mrp_level_bp",
		}
	);
};
