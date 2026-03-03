import 'dart:io';
import 'dart:math';

void main(){
  
  //1 Задание
  for (int i = 1; i <= 5; i ++) {
    print(i);
  }

  //2 Задание
  var chek = 0;
  for (int i = 1; i <= 10; i++){
    chek += i;
  }
  print(chek);

  //3 Задание
  for (int i = 10; 1 <= i; i--){
    print(i);
  }

  //4 Задание
  for (int i = 2; i <= 20; i++){
    if (i % 2 == 0) {
      print(i);
    } 
  }

  //5 Задание
  int a = 1;
  while (a <= 100) {
    print(a);
    a *= 2;
    print('умн: $a');
  }

  //6 Задание
  List<String> imena = ["Уил Грэм", "Ганнибал Лектор", "Сашахвостнадула"];
  for (String ima in imena) {
      print(ima);
    }

  //7 Задание 
  List<String> zadanie = ["абвгд", "я хочу домой", "слово"];
  for (String zam in zadanie) {
    int ss = zam.length;
    print(' " $zam "  длина: $ss');
  }

  //8 Задание
  List<String> cities = ["Москва", "Санкт-Петербург", "НУГОРОД"];
  int index = 0;
  for (var city in cities) {
    print('$index: $city');
    index++;
  }
    //9 Задание
  List<int> number = [5, 10, 15, 20, 25];
  int sum = 0;
  for (int num in number) {
    sum += num;
  }
  print('Сумма: $sum');

  //10 Задание
  List<int> number1 = [3, 7, 2, 9, 5];
  int max = number1[0];
  for (int i = 1; i < number1.length; i++) {
    if (number1[i] > max) {
      max = number1[i];
    }
  }
  print('Максимальный элемент: $max');
}
