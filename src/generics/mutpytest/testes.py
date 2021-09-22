import unittest
import mod

class Tests(unittest.TestCase):
    def test_func(self):
        self.assertEqual(mod.func(1,2,3), True)
        self.assertEqual(mod.func(30,20,10), True)
        self.assertEqual(mod.func(0,2,3), False)
        self.assertEqual(mod.func(1,0,3), False)
        self.assertEqual(mod.func(2,4,15), False)
        self.assertEqual(mod.func(-1,2,3), False)