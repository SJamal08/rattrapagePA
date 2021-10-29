module.exports={triDecroissant};
function triDecroissant(int_array){
    let sortedArray = int_array.sort(function(a, b) {
      return a - b;
    })

    return sortedArray.reverse()
 }