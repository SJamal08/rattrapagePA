
// return execute.cPlusPlusExecute(code, input)
// .then(data=>{
//     console.log("SUCCESSFULL PROMISE " + data)
//     console.log("SENDING " + data)
//     res.json(data)
//     deleteFile(path.join(__dirname, '../../input.txt'))
//     deleteFile(path.join(__dirname, '../../test.cpp'))
// })
// .catch(err => {
//     console.log("ERROR PROMISE " + err)
//     deleteFile(path.join(__dirname, '../../input.txt'))
//     deleteFile(path.join(__dirname, '../../test.cpp'))
// })
// case "c" : return execute.cExecute(code, input)
//                     .then(data=>{
//                         console.log("SUCCESSFULL PROMISE " + data)
//                         console.log("SENDING " + data)
//                         res.json(data)
//                         deleteFile(path.join(__dirname, '../../input.txt'))
//                         deleteFile(path.join(__dirname, '../../test.c'))
//                         deleteFile(path.join(__dirname, '../../a.exe'))

//                     })
//                     .catch(err => {
//                         console.log("ERROR PROMISE " + err)
//                         deleteFile(path.join(__dirname, '../../input.txt'))
//                         deleteFile(path.join(__dirname, '../../test.c'))
//                         deleteFile(path.join(__dirname, '../../a.exe'))
//                     })

//         case "java" : return execute.javaExecute(code, input)
//                         .then(data=>{
//                             console.log("SUCCESSFULL PROMISE " + data)
//                             console.log("SENDING " + data)
//                             res.json(data)
//                             deleteFile(path.join(__dirname, '../../input.txt'))
//                             deleteFile(path.join(__dirname, '../../test.java'))
//                             deleteFile(path.join(__dirname, '../../test.class'))
//                         })
//                         .catch(err => {
//                             console.log("ERROR PROMISE " + err)
//                             deleteFile(path.join(__dirname, '../../input.txt'))
//                             deleteFile(path.join(__dirname, '../../test.java'))
//                             deleteFile(path.join(__dirname, '../../test.class'))
//                         })