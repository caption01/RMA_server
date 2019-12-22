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
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        
    })

    History.associate = (models) => {
        History.belongsTo(models.bills, { foreignKey: { name: 'bill_id', allowNull: false } })
    }

    return History
}