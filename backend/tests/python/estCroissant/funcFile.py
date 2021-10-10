def est_croissant(int_array):
    elementPrecedent=int_array[0]
    for element in int_array:
        if elementPrecedent>element :
            return False
        elementPrecedent=element
    return True