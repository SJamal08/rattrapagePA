import unittest


from funcFile import recherche_element


class TestRecherche_element(unittest.TestCase):

    def test_upper(self):
        self.assertEqual(recherche_element(1),False)
        self.assertEqual(recherche_element(2),True)
        self.assertEqual(recherche_element(3),False)
        self.assertEqual(recherche_element(4),True)
        self.assertEqual(recherche_element(5),False)


if __name__ == '__main__':
    unittest.main()