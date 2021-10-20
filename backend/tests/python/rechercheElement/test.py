import unittest
import codewars_test as test


from funcFile import recherche_element

@test.describe('Fixed Tests')
def example_tests():

    @test.it('Example Test Case')
    def test_10():
        nb = 10
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l, 11),False,'Optional Message on Failure', allow_raise=False)

    @test.it('Example Test Case')
    def test_100():
        nb = 100
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l, 99),True,'Optional Message on Failure', allow_raise=False)
    
    @test.it('Example Test Case')
    def test_1000():
        nb = 1000
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l, 500),True,'Optional Message on Failure', allow_raise=False)

    @test.it('Example Test Case')
    def test_10000():
        nb = 10000
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l , -1),False,'Optional Message on Failure', allow_raise=False)

# class TestRecherche_element(unittest.TestCase):

#     def test_upper(self):
#         self.assertEqual(recherche_element(1),False)
#         self.assertEqual(recherche_element(2),True)
#         self.assertEqual(recherche_element(3),False)
#         self.assertEqual(recherche_element(4),True)
#         self.assertEqual(recherche_element(5),False)


# if __name__ == '__main__':
#     unittest.main()