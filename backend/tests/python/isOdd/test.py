import unittest


from funcFile import isOdd


class TestIsOdd(unittest.TestCase):

    def test_upper(self):
        self.assertEqual(isOdd(1),False)
        self.assertEqual(isOdd(2),True)
        self.assertEqual(isOdd(3),False)
        self.assertEqual(isOdd(4),True)
        self.assertEqual(isOdd(5),False)


if __name__ == '__main__':
    unittest.main()