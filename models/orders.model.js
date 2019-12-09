module.exports = (sequelize, DataType) => {

    const Orders = sequelize.define('orders', {
        order_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        status: {
            type: DataType.STRING,
            allowNull: false
        },
        quantity: {
            type: DataType.INTEGER(10),
            allowNull: false,
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Orders.associate = (models) => {
        Orders.belongsTo(models.bills, {foreignKey: { name:'bill_id', allowNull: false }}),
        Orders.hasMany(models.menus, {foreignKey: { name:'order_id', allowNull: false }})
    }

    return Orders
}