//const router = require('express').Router()
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

        console.log("data in changeIsSucceed>>>", data)

        if (data.err == false && data.output == '') {
            user.exercises[exoId].isSucceed = true
        } else {
            user.exercises[exoId].isSucceed = false

        }
        console.log("is succeed>>>>>>", user.exercises[exoId].isSucceed)

    }

    return execute.pythonExecute(code, input, exoId)
        .then(data => {
            console.log("SUCCESSFULL PROMISE " + data)
            console.log("SENDING " + data)
            console.log("data>>>>", data)
            changeIsSucceed(data)

            res.json(data)
            // deleteFile(path.join(__dirname, '../../input.txt'))
            // deleteFile(path.join(__dirname, '../../test.py'))
            // deleteFile(path.join(__dirname, '../../a.exe'))
        })
        .catch(err => {
            console.log("ERROR PROMISE " + err)
            // deleteFile(path.join(__dirname, '../../input.txt'))
            // deleteFile(path.join(__dirname, '../../test.py'))
            // deleteFile(path.join(__dirname, '../../a.exe'))
        })
        .finally(() => {
            userCtrl.updateUser(user, req.headers.authorization.split(' ')[1])
        })

}

// router.post('/submit', (req, res) => {
//     console.log(req.body)
//     const code = req.body.code
//     const input = req.body.input
//     const exoId = req.body.exoId

//     // const lang = req.body.lang

//     return execute.pythonExecute(code, input, exoId)
//         .then(data => {
//             console.log("SUCCESSFULL PROMISE " + data)
//             console.log("SENDING " + data)
//             res.json(data)
//             // deleteFile(path.join(__dirname, '../../input.txt'))
//             // deleteFile(path.join(__dirname, '../../test.py'))
//             // deleteFile(path.join(__dirname, '../../a.exe'))
//         })
//         .catch(err => {
//             console.log("ERROR PROMISE " + err)
//             // deleteFile(path.join(__dirname, '../../input.txt'))
//             // deleteFile(path.join(__dirname, '../../test.py'))
//             // deleteFile(path.join(__dirname, '../../a.exe'))
//         })


// })


// module.exports = router