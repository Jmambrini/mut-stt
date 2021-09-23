import unittest
import codigo

class Tests(unittest.TestCase):
    def test_func(self):
        self.assertEqual(codigo.func(1,2,3), True)
        self.assertEqual(codigo.func(30,20,10), True)
        self.assertEqual(codigo.func(0,2,3), False)
        self.assertEqual(codigo.func(1,0,3), False)
        self.assertEqual(codigo.func(2,4,15), False)
        self.assertEqual(codigo.func(-1,2,3), False)