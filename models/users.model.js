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
        },
        date: {
            type: DataType.DATE,
            defaultValue: new Date()
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
        Users.belongsTo(models.bills, {foreignKey: { name:'bill_id', allowNull: false }}),
        Users.belongsTo(models.restaurants, { foreignKey: { name: 'restaurant_id', allowNull: false } })
    }

    return Users
}