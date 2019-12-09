module.exports = (sequelize, DataType) => {

    const Menus = sequelize.define('menus', {
        menu_id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        availiable: {
            type: DataType.BOOLEAN,
            allowNull: false,
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Menus.associate = (models) => {
        Menus.belongsTo(models.orders, {foreignKey: { name:'order_id', allowNull: false }}),
        Menus.belongsTo(models.restaurants, {foreignKey: { name:'restaurant_id', allowNull: false }})
    }

    return Menus
}