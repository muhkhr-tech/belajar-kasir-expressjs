const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Menu = sequelize.define('menus', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     allowNull: false,
    //   },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING
}, { timestamps: true },)

Menu.sync({alter:true})

module.exports = Menu