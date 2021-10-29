const fs = require('fs')
const { exec } = require('child_process');
const path = require('path');

const pythonExecute = (data, input, exoId, folderName) => {
  const res = {
    err: false,
    msg: ""
  }
  return new Promise((resolve, reject) => {
    console.warn("Exo id ", exoId)
    const folderPath = "./tests/python/" + folderName 
    const fileName = folderPath + "/funcFile.py"

    saveFile(fileName, data)
      .then(() => {
        fs.writeFile("input.txt", input, function (err) {
          if (err) {
            reject()
          }
        });
        const filePath = path.join(__dirname, "../tests/python/" + folderName + "/test.py")
        const inputPath = path.join(__dirname, "../input.txt")
        exec('python3 ' + filePath + " < " + inputPath, (err, stdout, stderr) => {
          if (err) {
            resolve({
              err: true,
              output: err,
              error: stderr
            })
          }
          deleteFile( "./tests/python/" +folderName+ "/funcFile.py")
          resolve({
            err: false,
            output: stdout
          })
        })
      })
      .catch(() => {
        const err = {
          err: true,
          output: "Internal Server Error!"
        }
        resolve(err)
      })
    }
  )
}


const deleteFile = (filename) => {
  fs.unlink(filename, function (err) {
      if (err) {
          console.log("SORRY NOT DELETED", err)
      };
  }); 
}

const saveFile = (name, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(name, data, function (err) {
      if (err) {
        console.log(err);
        reject()
      } else {
        resolve()
      }
    });
  })
}

module.exports = {
  pythonExecute
}



