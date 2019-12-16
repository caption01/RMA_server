module.exports = (sequelize, DataType) => {

    const Staffs = sequelize.define('staffs', {
        staff_key: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        staff_id: {
            type: DataType.STRING,
            allowNull: false
        },
        staff_password: {
            type: DataType.STRING,
            allowNull: false,
        },
        role: {
            type: DataType.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    Staffs.associate = (models) => {}

    return Staffs
}