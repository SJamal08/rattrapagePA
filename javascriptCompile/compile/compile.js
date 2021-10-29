const fs = require('fs')
const { exec } = require('child_process');
const path = require('path');

const jsExecute = (data, input, exoId, folderName) => {
  const res = {
    err: false,
    msg: ""
  }
  return new Promise((resolve, reject) => {
    console.warn("Exo id ", exoId)
    const folderPath = "./tests/javascript/" + folderName
    const fileName = folderPath + "/funcFile.js"

    saveFile(fileName, data,folderName)
      .then(() => {
        fs.writeFile("input.txt", input, function (err) {
          if (err) {
            reject()
          }
        });

        const filePath = path.join(__dirname, "../tests/javascript/" + folderName + "/"+folderName+".test.js")
        const inputPath = path.join(__dirname, "../input.txt")
        
        exec("npm test " + folderName + " < " + inputPath, (err, stdout, stderr) => {
          if (err) {
            resolve({
              err: true,
              output: err,
              error: stderr
            })
          }
          deleteFile( "./tests/javascript/" + folderName + "/funcFile.js")
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

const saveFile = (name, data, folderName) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(name,"module.exports={"+folderName+"};\n"+data, function (err) {
      if (err) {
        reject()
      } else {
        resolve()
      }
    });
  })
}







module.exports = {
  jsExecute
}



