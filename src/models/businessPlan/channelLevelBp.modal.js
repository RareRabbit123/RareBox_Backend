export default (sequelize, DataTypes) => {
	return sequelize.define(
		"channel_level_bp",
		{
			channel: {
				type: DataTypes.STRING(100),
				field: "channel",
			},
			name: {
				type: DataTypes.STRING(150),
				field: "name",
				allowNull: false,
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
			tableName: "channel_level_bp",
		}
	);
};
