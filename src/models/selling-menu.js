const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const Menu = require('./menu')
const Selling = require('./selling')

const SellingMenu = sequelize.define('selling_menus', {
    menuId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Menu,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    sellingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Selling,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
}, { timestamps: false },)

Menu.belongsToMany(Selling, { through: SellingMenu})
Selling.belongsToMany(Menu, { through: SellingMenu})

// SellingMenu.sync({alter:true})

module.exports = SellingMenu