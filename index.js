const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const allApiHandlers = require('./routes/index')

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

mongoose.connect("mongodb://127.0.0.1:27017/book-store", {
    useNewUrlParser: true
});
mongoose.set('debug', true)

app.use(bodyParser.json())

app.use('/api', allApiHandlers)

app.use((error, req, res, next) => {
    res.status(500).json({
        error
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log('started');
})