module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('users', {
        user_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        user_password: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        role: {
            type: DataType.STRING,
            allowNull: false
        },
        size: {
            type: DataType.INTEGER(10),
            allowNull: true
        }
    }, {
        freezeTableName: true,
        timestamps: true,
        updatedAt: false
    })

    Users.associate = (models) => {
        Users.hasOne(models.bills, {foreignKey: { name:'user_id', allowNull: false }}),
        Users.belongsTo(models.restaurants, { foreignKey: { name: 'restaurant_id', allowNull: false } })
    }

    return Users
}