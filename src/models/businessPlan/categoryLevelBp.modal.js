export default (sequelize, DataTypes) => {
	return sequelize.define(
		"category_level_bp",
		{
			category: {
				type: DataTypes.STRING(120),
				field: "category",
				allowNull: false,
			},
			sub_category: {
				type: DataTypes.STRING(120),
				field: "sub_category",
				allowNull: "false",
			},
			total_qty: {
				type: DataTypes.INTEGER,
				field: "total_qty",
				allowNull: false,
			},
			total_mrp: {
				type: DataTypes.INTEGER,
				field: "total_mrp",
				defaultValue: 0,
			},
			total_count: {
				type: DataTypes.SMALLINT,
				field: "total_count",
				allowNull: false,
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
			tableName: "category_level_bp",
		}
	);
};
