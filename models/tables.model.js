module.exports = (sequelize, DataType) => {

    const Tables = sequelize.define('tables', {
        table_id: {
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
        status: {
            type: DataType.BOOLEAN,
            allowNull: false,
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Tables.associate = (models) => {
        Tables.hasMany(models.bills, {foreignKey: { name:'table_id', allowNull: false }}),
        Tables.belongsTo(models.restaurants, {foreignKey: { name:'restaurant_id', allowNull: false }})
    }

    return Tables
}