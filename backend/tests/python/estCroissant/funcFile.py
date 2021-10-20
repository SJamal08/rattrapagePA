def est_croissant (L):
    elementPrecedent=L[0]
    for element in L:
        if elementPrecedent>element :
            return False
        elementPrecedent=element   
    return True