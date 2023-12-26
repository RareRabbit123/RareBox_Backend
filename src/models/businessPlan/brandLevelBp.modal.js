export default (sequelize, DataTypes) => {
	return sequelize.define(
		'brand_level_bp',
		{
			id: {
				type: DataTypes.INTEGER,
				field: 'id',
				autoIncreament:true,
				primaryKey: true,
				allowNull: false
			},
			brand: {
				type: DataTypes.STRING(120),
				field: 'brand'
			},
			subBrand: {
				type: DataTypes.STRING(120),
				field: 'sub_brand'
			},
			division: {
				type: DataTypes.STRING(140),
				field: 'division'
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
				field: 'total_count'
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
			tableName: 'brand_level_bp'
		}
	);
};
