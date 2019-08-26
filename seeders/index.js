const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/book-store", {
    useNewUrlParser: true
});
mongoose.set('debug', true)

const addAdmin = require('./admin')

const seedArray = [addAdmin]

seedArray.forEach(async (eachSeeder) => {
    await eachSeeder()
})