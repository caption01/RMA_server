module.exports = (sequelize, DataType) => {

    const History = sequelize.define('historys', {
        history_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        menu_name: {
            type: DataType.STRING,
            allowNull: false
        },
        quantity: {
            type: DataType.INTEGER(10),
            allowNull: false,
        },
        type: {
            type: DataType.STRING
        },
        createdAt: {
            type: DataType.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    History.associate = (models) => {
        History.belongsTo(models.bills, { foreignKey: { name: 'bill_id', allowNull: false } })
    }

    return History
}