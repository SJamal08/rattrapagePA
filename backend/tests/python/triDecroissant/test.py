import unittest
import random
import codewars_test as test


from funcFile import tri_decroissant

@test.describe('Fixed Tests')
def example_tests():

    @test.it('Example Test Case')
    def test_10():
        l = [i for i in range(10)]
        random.shuffle(l)
        test.assert_equals(tri_decroissant(l),sorted(l,reverse=True),'Optional Message on Failure', allow_raise=False)

    @test.it('Example Test Case')
    def test_100():
        l = [i for i in range(100)]
        random.shuffle(l)
        test.assert_equals(tri_decroissant(l),sorted(l,reverse=True),'Optional Message on Failure', allow_raise=False)
    
    @test.it('Example Test Case')
    def test_1000():
        l = [i for i in range(1000)]
        random.shuffle(l)
        test.assert_equals(tri_decroissant(l),sorted(l,reverse=True),'Optional Message on Failure', allow_raise=False)

    @test.it('Example Test Case')
    def test_10000():
        l = [i for i in range(10000)]
        random.shuffle(l)
        test.assert_equals(tri_decroissant(l),sorted(l,reverse=True),'Optional Message on Failure', allow_raise=False)

# class TestTri_decroissant(unittest.TestCase):
#     def test_10():
#         l = [i for i in range(10)]
#         random.shuffle(l)
#         test.assertEqual(tri_decroissant(l),sorted(l,reverse=True))

    # def test_100(self):
    #     l = [i for i in range(100)]
    #     random.shuffle(l)
    #     self.assertEqual(tri_decroissant(l),sorted(l,reverse=True))

    # def test_1000(self):
    #     l = [i for i in range(1000)]
    #     random.shuffle(l)
    #     self.assertEqual(tri_decroissant(l),sorted(l,reverse=True))

    # def test_10000(self):
    #     l = [i for i in range(10000)]
    #     random.shuffle(l)
    #     self.assertEqual(tri_decroissant(l),sorted(l,reverse=True))

        # l2 = [i for i in range(100)]
        # random.shuffle(l2)

        # l3 = [i for i in range(1000)]
        # random.shuffle(l3)

        # print("1 passed")
        # self.assertEqual(tri_decroissant(l2),sorted(l2,reverse=True))
        # self.assertEqual(tri_decroissant(l3),sorted(l3,reverse=True))
        # endTime = time.time()

        # print("Result in " , endTime - startTime , " seconds")


# if __name__ == '__main__':
#     unittest.main()