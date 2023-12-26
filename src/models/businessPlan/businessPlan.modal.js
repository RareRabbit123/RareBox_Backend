export default (sequelize, DataTypes) => {
	return sequelize.define(
		"business_plan",
		{
			id: {
				type: DataTypes.UUID,
				field: "id",
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			season: {
				type: DataTypes.STRING(100),
				field: "season",
				allowNull: false,
			},
			totalQty: {
				type: DataTypes.INTEGER,
				field: "total_qty",
				defaultValue: 0,
			},
			totalMrp: {
				type: DataTypes.INTEGER,
				field: "total_mrp",
				defaultValue: 0,
			},
			totalCount: {
				type: DataTypes.SMALLINT,
				field: "total_count",
				allowNull: false,
			},
			currentCount: {
				type: DataTypes.SMALLINT,
				field: "current_count",
				defaultValue: 0,
			},
			isVerified: {
				type: DataTypes.BOOLEAN,
				field: "is_verified",
				defaultValue: false,
			},
			isSubmitted: {
				type: DataTypes.BOOLEAN,
				field: "is_submitted",
				defaultValue: false,
			},
		},
		{
			timestamps: true,
			underscored: true,
			tableName: "business_plan",
		}
	);
};
