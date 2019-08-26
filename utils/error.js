function error(res, code = 400, msg) {
    res.status(code).json({
        error: msg
    })
}

module.exports = error