def est_croissant(liste):
    for i in range(len(liste)-1):
        if not liste[i] <= liste[i+1]:
            return False
    return Tru