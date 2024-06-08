const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Selling = sequelize.define('sellings', {
    description: DataTypes.STRING,
    sellingDate: DataTypes.DATE,
    buyerName: DataTypes.STRING,
    buyerPhone: DataTypes.STRING,
    buyerAddress: DataTypes.STRING,
    status: DataTypes.BOOLEAN
}, { timestamps: true },)

Selling.sync({alter:true})

module.exports = Selling