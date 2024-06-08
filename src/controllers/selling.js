const sequelize = require('../database/db')
const Menu = require('../models/menu')
const Selling = require('../models/selling')
const SellingMenu = require('../models/selling-menu')

async function get(req, res, next) {
    const data = await Selling.findAll({include: Menu})
    // const data = await sequelize.query(`
    //     SELECT * FROM sellings
    //     LEFT JOIN selling_menus
    //         ON sellings.id=selling_menus.sellingId
    //     LEFT JOIN menus
    //         ON selling_menus.menuId=menus.id`)

    res.json({
        'status': 'success',
        'message': 'Data penjualan',
        'data': data
    })
}

async function create(req, res, next) {
    const selling = await Selling.create(req.body)
    const menu = await Menu.findOne({where: {id: req.body.menuId}})

    selling.addMenu(menu, {
        through: {
            price: req.body.price,
            amount: req.body.amount
        }
    })

    SellingMenu.bulkCreate([
        {'sellingId': selling.id, 'menuId': menu.id, 'price': menu.price, 'amount': req.body.amount},
    ])

    res.json({
        'status': 'success',
        'message': 'Data penjualan berhasil dibuat',
    })
}

async function verify(req, res, next) {
    const selling = await Selling.findOne({where: {id: req.params.id}})
    selling.status = true
    await selling.save()

    res.json({
        'status': 'success',
        'message': 'Data penjualan berhasil diverifikasi',
    })
}

async function unverify(req, res, next) {
    const selling = await Selling.findOne({where: {id: req.params.id}})
    selling.status = false
    await selling.save()

    res.json({
        'status': 'success',
        'message': 'Data penjualan berhasil tidak diverifikasi',
    })
}

module.exports = {
    get,
    create,
    verify,
    unverify
}