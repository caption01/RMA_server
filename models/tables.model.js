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
        number: {
            type: DataType.INTEGER(10),
            allowNull: false
        },
        status: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
        user_key: {
            type: DataType.UUID
        },
        time_end: {
            type: DataType.STRING
        },
        qrcode: {
            type: DataType.TEXT
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Tables.associate = (models) => {}

    return Tables
}