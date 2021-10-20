import unittest
import time
import random
import codewars_test as test

from funcFile import est_croissant

@test.describe('Fixed Tests')
def example_tests():

    @test.it('Example Test Case')
    def test_10():
        nb = 10
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        l.sort()
        test.assert_equals(est_croissant(l),True,'Optional Message on Failure', allow_raise=False)

    @test.it('Example Test Case')
    def test_100():
        nb = 100
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        test.assert_equals(est_croissant(l),False,'Optional Message on Failure', allow_raise=False)
    
    @test.it('Example Test Case')
    def test_1000():
        nb = 1000
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        l.sort()
        test.assert_equals(est_croissant(l),True,'Optional Message on Failure', allow_raise=False)

    @test.it('Example Test Case')
    def test_10000():
        nb = 10000
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        test.assert_equals(est_croissant(l),False,'Optional Message on Failure', allow_raise=False)


# class TestEst_croissant(unittest.TestCase):

#     def test_10(self):
#         nb = 10
#         l=[i+1 for i in range(nb)]
#         self.assertEqual(est_croissant(l),True)
        
#     def test_100(self):
#         nb = 100
#         l=[i+1 for i in range(nb)]
#         random.shuffle(l)
#         self.assertEqual(est_croissant(l),False)

#     def test_1000(self):
#         nb = 1000
#         l=[i+1 for i in range(nb)]
#         self.assertEqual(est_croissant(l),True)
    
#     def test_10000(self):
#         nb = 10000
#         l=[i+1 for i in range(nb)]
#         random.shuffle(l)
#         self.assertEqual(est_croissant(l),False)

# if __name__ == '__main__':
#     unittest.main()