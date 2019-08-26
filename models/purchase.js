const mongoose = require('mongoose')
const purchaseSchema = require('../schema/purchase')


const purchaseModel = mongoose.model('purchase', purchaseSchema)

module.exports = exports = purchaseModel