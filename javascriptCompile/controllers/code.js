const execute = require('../compile/compile')

exports.compile = (req, res) => {
    const exoId = req.body.exoId
    const code = req.body.code
    const folderName= req.body.folderName
    const input = ""

    return execute.jsExecute(code, input, exoId, folderName)
        .then(data => res.json(data))
        .catch(err => {
            console.log("ERROR PROMISE " + err)
        })

}
