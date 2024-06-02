const express = require('express')
const sellingRouter = require('./routes/selling')
const menuRouter = require('./routes/menu')

const app = express()

app.use(express.urlencoded({extended: true}))

app.use('/selling', sellingRouter)
app.use('/menu', menuRouter)

app.listen(3030, () => {
    console.log('running on port 300');
})