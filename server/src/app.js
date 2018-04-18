const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `${req.body.email} Your user was registered! Have fun!`
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log('server start')
})
