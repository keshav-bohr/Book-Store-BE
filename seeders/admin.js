const User = require('../models/user')

async function addAdmin() {
    try {
        const admin = new User({
            email: 'admin@example.com',
            password: 'admin@123',
            isAdmin: true,
            name: 'Admin'
        })
        await admin.save()
        console.log('admin created');
    } catch (error) {
        console.log(error)
    }
}

module.exports = addAdmin