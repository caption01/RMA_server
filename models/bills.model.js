module.exports = (sequelize, DataType) => {

    const Bills = sequelize.define('bills', {
        bill_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        bill_endTime: {
            type: DataType.STRING,
            allowNull: false
        },
        price: {
            type: DataType.INTEGER(10),
            allowNull: false,
        },
        bill_status: {
            type: DataType.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Bills.associate = (models) => {
        Bills.hasOne(models.users, {foreignKey: { name:'bill_id', allowNull: false }}),
        Bills.hasMany(models.orders, {foreignKey: { name:'bill_id', allowNull: false }})
    }

    return Bills
}