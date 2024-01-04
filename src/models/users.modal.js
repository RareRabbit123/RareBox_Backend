export default (sequelize, DataTypes) => {
	return sequelize.define(
		"user",
		{
			id: {
				type: DataTypes.UUID,
				field: "id",
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			first_name: {
				type: DataTypes.STRING(100),
				field: "first_name",
				allowNull: false,
				unique: true,
			},
			last_name: {
				type: DataTypes.STRING(100),
				field: "last_name",
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				field: "password",
				allowNull: false,
			},
			role: {
				type: DataTypes.JSON,
				field: "role",
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				field: "email",
				allowNull: false,
				unique: true,
			},
		},
		{
			timestamps: true,
			underscored: true,
			tableName: "user",
		}
	);
};
