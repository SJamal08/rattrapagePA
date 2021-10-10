import unittest


from funcFile import tri_Decroissant


class TestTri_decroissant(unittest.TestCase):

    def test_upper(self):
        self.assertEqual(tri_Decroissant(1),False)
        self.assertEqual(tri_Decroissant(2),True)
        self.assertEqual(tri_Decroissant(3),False)
        self.assertEqual(tri_Decroissant(4),True)
        self.assertEqual(tri_Decroissant(5),False)


if __name__ == '__main__':
    unittest.main()