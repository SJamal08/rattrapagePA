import unittest


from funcFile import est_croissant


class TestEst_croissant(unittest.TestCase):

    def test_upper(self):
        l=[1,2,3,4,6]
        l2=[2,3,5,1]
        self.assertEqual(est_croissant(l),True)
        self.assertEqual(est_croissant(l2),False)


if __name__ == '__main__':
    unittest.main()