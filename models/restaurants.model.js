module.exports = (sequelize, DataType) => {

    const Restaurants = sequelize.define('restaurants', {
        restaurant_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }},{
            freezeTableName: true,
            timestamps: false
        })

    Restaurants.associate = (models) => {
        Restaurants.hasMany(models.users,  { foreignKey: { name: 'restaurant_id', allowNull: false }}),
        Restaurants.hasMany(models.tables, {foreignKey: { name:'restaurant_id', allowNull: false }}),
        Restaurants.hasMany(models.menus, {foreignKey: { name:'restaurant_id', allowNull: false }})
    }

    return Restaurants
}