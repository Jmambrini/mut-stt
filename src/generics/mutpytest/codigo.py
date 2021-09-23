def func(a,b,c):
    if (a or b or c) < 0:
        return False
    if (a + b >= c) and (a + c >= b) and (b + c >= a):
        return True
    else:
        return False