export default (sequelize, DataTypes) => {
	return sequelize.define(
		"channel_level_bp",
		{
			id: {
				type: DataTypes.INTEGER,
				field: "id",
				autoIncreament: true,
				primaryKey: true,
				allowNull: false,
			},
			channel: {
				type: DataTypes.STRING(100),
				field: "channel",
			},
			name: {
				type: DataTypes.STRING(150),
				field: "name",
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
			tableName: "channel_level_bp",
		}
	);
};
