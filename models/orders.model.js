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
            type: DataType.BOOLEAN,
            allowNull: false
        },
        table_number: {
            type: DataType.INTEGER(10),
            allowNull: false
        },
        menu_name: {
            type: DataType.STRING,
            allowNull: false
        },
        quantity: {
            type: DataType.INTEGER(10),
            allowNull: false,
        },
        createdAt: {
            type: DataType.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        
    })

    Orders.associate = (models) => {
        Orders.belongsTo(models.bills, { foreignKey: { name: 'bill_id', allowNull: false } })
    }

    return Orders
}