module.exports={rechercheElement};
function rechercheElement(int_array, element){
    const verif = int_array.find(x => x == element);
    return verif !== undefined
 }