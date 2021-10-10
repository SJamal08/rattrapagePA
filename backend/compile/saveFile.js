const saveFile = (name, data) => {
    return new Promise((resolve, reject) => {
      // Saving File
        console.log("SAVING FILES")
        fs.writeFile(name, data, function(err) {
          if(err) {
              console.log(err);
              reject()
          } else {
              console.log("The file was saved!");
              resolve()
          }
      }); 
    })
}




module.exports = saveFile