const fs = require('fs')
const userCtrl = require('../controllers/user')
//const path = require('path')
const execute = require('../compile/compile')
//const deleteFile = require('./deleteFile')

exports.compile = (req, res) => {
    const user = req.body.user
    const exoId = req.body.id
    const code = user.exercises[exoId].defaultCode
    const input = ""
    
    const changeIsSucceed = (data) => {
        if (data.err == true)
            {
                user.exercises[exoId].isSucceed = false
            }
        else 
            {
                const output = data.output.split(/\r\n|\r|\n/)

                let success = true
                output.forEach(element => {
                    if (element.startsWith("<FAILED::>")) {
                        success= false
                    }
                });
                user.exercises[exoId].isSucceed = success
            }
    }

    return execute.pythonExecute(code, input, exoId)
        .then(data => {
            console.log("SUCCESSFULL PROMISE " + data)
            console.log("SENDING " + data)
            console.log("data>>>>", data)
            changeIsSucceed(data)

            res.json(data)
            // deleteFile(path.join(__dirname, '../../test.py'))
            // deleteFile(path.join(__dirname, '../../a.exe'))
        })
        .catch(err => {
            console.log("ERROR PROMISE " + err)
            // deleteFile(path.join(__dirname, '../../test.py'))
            // deleteFile(path.join(__dirname, '../../a.exe'))
        })
        .finally(() => {
            userCtrl.updateUser(user, req.headers.authorization.split(' ')[1])
        })

}
