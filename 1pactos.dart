import 'dart:io';
import 'dart:math';


void main(){
  print("\nПривеееет это калькулятор.\nВведите два числа. Первое:");
  String? bbb = stdin.readLineSync();
  int chislo1 = int.parse(bbb!);
  print("Вы ввели: $chislo1 . Введите следующие:");

  String? bbbb = stdin.readLineSync();
  int chislo2 = int.parse(bbbb!);
  print("Вы ввели: $chislo2 . Класс. Что с ними делать будем? Введите номер действий.");

  print("Подсказка: 1.Арефметические действия, 2.Сравнения, 3.Ну балавство...");
  String? nnn = stdin.readLineSync();
  int destvie = int.parse(nnn!);
  
  if (destvie == 1) {
    print("Вы выбрали арифметические действия.");
    print("Действия: 1.сложение, 2.вычитание, 3.умножение, 4.деление,\n5.целочисленное деление, 6.остаток от деления, 7.возведение в степень\nДля выбора действия введи его номер!");
     String? nnn = stdin.readLineSync();
     int destvieAREF = int.parse(nnn!);
     String result = "";
     switch (destvieAREF) {
      case 1:
        result = "${chislo1 + chislo2}";
        break;
      case 2:
        result = "${chislo1 - chislo2}";
        break;
      case 3:
        result = "${chislo1 * chislo2}";
        break;
      case 4:
        if (chislo2 == 0) {
          result = "Ошибка: деление на ноль!";
        } else {
          result = "${chislo1 / chislo2}";
        }
        break;
      case 5:
        if (chislo2 == 0) {
          result = "Ошибка: деление на ноль!";
        } else {
          result = "${chislo1 ~/ chislo2}";
        }
        break;
      case 6:
        if (chislo2 == 0) {
          result = "Ошибка: деление на ноль!";
        } else {
          result = "${chislo1 % chislo2}";
        }
        break;
      case 7:
        result = "${pow(chislo1, chislo2)}";
        break;
      default:
        result = "Ну введи нормальные цифры";
    }
    print("Результат: $result");

  } else if (destvie == 2) {
    print("Вы выбрали сравнение чисел.");
     if (chislo1>chislo2){print("превое число больше второго");} 
     else if (chislo1<chislo2){print("второе число больше первого");}
     else if (chislo1==chislo2){print("числа равны");}
     else { print("ну что-то не так");} 

  } else if (destvie == 3) {
    print("Короче это для того, чтобы набрать нужные операторы.\nРезультат второго сравнения:");
     if (chislo1>=chislo2){print("превое число больше или равно второму");} 
     else if (chislo1<=chislo2){print("второе число больше или равно первому");}
     else if (chislo1!=chislo2){print("числа не равны");}
     else { print("ну что-то не так");} 
    print("Ну это кстати ещё не все, смотрите, как умею.");
    print("Анекдот! Как называется человек, за которым бежит каннибал?");
    String? eda = stdin.readLineSync();
    if (eda == "fast food" || eda == "фаст фуд" ){ print("почему вы знаете этот анекдот черт");}
    else if (eda != "fast food" && eda != "фаст фуд"){ print("Fast food!!");}
    print("Ну теперь точно все");

  } else { print("Нормальные числа вводить можно?"); }

  print("Спасибоо за использование этой программы, у меня температура кстати, поэтому меня нет на парах.");

}