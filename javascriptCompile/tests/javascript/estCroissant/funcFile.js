module.exports={estCroissant};
function estCroissant(liste)
{
    for (i=0;i<liste.length;i++){
        if (liste[i+1] <= liste[i])
            return false
        }
    return tru
}