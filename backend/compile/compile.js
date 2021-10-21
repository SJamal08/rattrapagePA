const fs = require('fs')
const { exec } = require('child_process');
const path = require('path');
const exercises = require('../data/Exercise.json');

// Function for execuing python code
const pythonExecute = (data, input, exoId) => {
  const res = {
    err: false,
    msg: ""
  }
  return new Promise((resolve, reject) => {
    console.warn("Exo id ", exoId)
    const exo = exercises[exoId]
    const folderName = "./tests/python/" + exo.folderName
    const fileName = folderName + "/funcFile.py"

    saveFile(fileName, data)
      .then(() => {
        // Create Input file
        fs.writeFile("input.txt", input, function (err) {
          if (err) {
            console.log(err);
            reject()
          }
        });

        // FILE SAVED SUCCESSFULLY
        // Generate the output file for it
        const filePath = path.join(__dirname, "../tests/python/" + exo.folderName + "/test.py")

        console.log("FILE PATH >> " + filePath);

        const inputPath = path.join(__dirname, "../input.txt")
        // COMPILE THE C++ CODES
        exec('python ' + filePath + " < " + inputPath, (err, stdout, stderr) => {
          if (err) {
            // IF COMPILATION ERROR
            console.error(`exec error: ${err}`);
            resolve({
              err: true,
              output: err,
              error: stderr
            })
          }
          deleteFile( "./tests/python/" + exo.folderName + "/funcFile.py")
          resolve({
            err: false,
            output: stdout
          })
        })
      })
      .catch(() => {
        console.log("ERROR SAVE FILE" + saveFileRes)
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
      // if no error, file has been deleted successfully
      console.log('File deleted!');
  }); 
}

const saveFile = (name, data) => {
  return new Promise((resolve, reject) => {
    // Saving File
    console.log("SAVING FILES")
    fs.writeFile(name, data, function (err) {
      if (err) {
        console.log(err);
        reject()
      } else {
        console.log("The file was saved!");
        resolve()
      }
    });
  })
}







module.exports = {
  pythonExecute
}



