menu = []

async function get(req, res, next) {
    res.send(menu)
}

async function create(req, res, next) {
    menu.push(req.body.name)
    
    res.json({
        'status': 'success',
        'message': 'berhasil menambah menu baru'
    })
}

async function remove(req, res, next) {
    menu = menu.slice(req.params.id)

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