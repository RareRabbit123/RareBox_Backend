export default (sequelize, DataTypes) => {
	return sequelize.define(
		'category_level_bp',
		{
			id: {
				type: DataTypes.INTEGER,
				field: 'id',
				autoIncreament:true,
				primaryKey: true,
				allowNull: false
			},
			category: {
				type: DataTypes.STRING(120),
				field: 'category',
				allowNull:false
			},
			subCategory: {
				type: DataTypes.STRING(120),
				field: 'sub_category',
				allowNull:"false"
			},
			totalQty: {
				type: DataTypes.INTEGER,
				field: 'total_qty',
				allowNull:false
			},
			totalMrp: {
				type: DataTypes.INTEGER,
				field: 'total_mrp'
			},
			totalCount: {
				type: DataTypes.SMALLINT,
				field: 'total_count',
				allowNull:false
			},
			currentCount: {
				type: DataTypes.SMALLINT,
				field: 'current_count',
				defaultValue:0
			},
			isVerified: {
				type: DataTypes.BOOLEAN,
				field: 'is_verified',
				defaultValue:false
			},
			isSubmitted: {
				type: DataTypes.BOOLEAN,
				field: 'is_submitted',
				defaultValue:false
			},

			
		},
		{
			timestamps: true,
			underscored: true,
			tableName: 'category_level_bp'
		}
	);
};
