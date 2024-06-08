const Menu = require('../models/menu')

async function get(req, res, next) {
    const data = await Menu.findAll()
    
    res.json({
        'status': 'success',
        'message': 'Data menu',
        'data': data
    })
}

async function create(req, res, next) {
    Menu.create(req.body)
    
    res.json({
        'status': 'success',
        'message': 'berhasil menambah menu baru'
    })
}

async function remove(req, res, next) {
    const menu = await Menu.findOne({where: {id: req.params.id}})

    await menu.destroy()

    res.json({
        'status': 'success',
        'message': 'berhasil menghapus satu menu'
    })
}

module.exports = {
    get,
    create,
    remove
}