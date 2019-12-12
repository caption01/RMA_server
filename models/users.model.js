module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('users', {
        user_key: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        user_id: {
            type: DataType.STRING,
            allowNull: false
        },
        user_password: {
            type: DataType.STRING,
            allowNull: false,
        },
        role: {
            type: DataType.STRING,
            allowNull: false
        },
        size: {
            type: DataType.INTEGER(10),
            allowNull: true
        },
        date: {
            type: DataType.STRING,
        },
        table_number: {
            type: DataType.INTEGER(10)
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        updatedAt: false
    })

    Users.associate = (models) => {
        Users.belongsTo(models.restaurants, { foreignKey: { name: 'restaurant_id', allowNull: false } }),
        Users.hasOne(models.bills, { foreignKey: { name: 'user_id', allowNull: false}})
    }

    return Users
}