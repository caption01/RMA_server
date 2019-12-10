module.exports = (sequelize, DataType) => {

    const Menus = sequelize.define('menus', {
        menu_id: {
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
        description: {
            type: DataType.TEXT,
            allowNull: true,
        },
        availiable: {
            type: DataType.BOOLEAN,
            allowNull: false,
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Menus
}