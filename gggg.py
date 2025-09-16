print("Разделы математики: 1 - алгебраические действия с двумя числами, 2 - действия с таблицей истинности.")
DOSTALA = int(input("Выберете раздел математки:"))
chert = [1, 2, 3]
print("далее") if DOSTALA in chert else print("введите корректное значение")

# алгебраические действия
if DOSTALA == 1:
    a = float(input("Введите первое число "))
    b = float(input("Введите второе число "))
    print("Действия: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление, 5 - целостное деление, 6 - остаток от деления, 7 - возведение в степень 8 - сравнение. ")
    action = int(input("Введите действие (от 1 до 8)"))
    list = [1, 2, 3, 4, 5, 6, 7, 8]

    print("результат снизу") if action in list else print("неверно введено арифметическое действие")

    if action == 1:
        print(a + b)
    elif action == 2:
        print(a - b)
    elif action == 3:
        print(a * b)
    elif action == 4:
        print(a / b)
    elif action == 5:
        print(a // b)
    elif action == 6:
        print(a % b)
    elif action == 7:
        print(a**b)
    elif action == 8:

        if a is not b:
            print("числа равны")
        elif a > b:
            result1 = ">"
            print(result1)
        elif a < b:
            result2 = "<"
            print(result2)
        elif a is b:
            print("числа не равны")
        else:
            print("не возможно сранить")

    else:
        print("вы ввели не верное действие")

# таблица истинности
if DOSTALA == 2:
    sv = [0, 1]

    s = float(input("событие A = (0, 1) "))
    if s in sv:
        print("далее")
    else:
        print("Неверно введено значение. Пожалуйста, введите 0 или 1.")

    v = float(input("событие B = (0, 1) "))
    if v in sv:
        print("далее")
    else:
        print("Неверно введено значение. Пожалуйста, введите 0 или 1.")

    print("Действия: 1 - Конъюнкция, 2 - Дизъюнкция, 3 - Инверсия (для 1 числа).")
    action1 = int(input("Введите действие (от 1 до 3)"))
    list1 = [1, 2, 3, 4]
    print("результат снизу") if action1 in list1 else print("неверно введено действие")
    
    if action1 == 1:
        print(s and v)
    elif action1 == 2:
        print(s or v)
    elif action1 == 3:
        print(not s)
    else:
        print("неверно введены данные")
