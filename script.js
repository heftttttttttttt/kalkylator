let expenses = [];


//1 Задание
function addExpense(name, summ, category) {

  let newExpense = {
    "название": name,
    "сумма": summ,
    "категория": category 
};

  expenses.push(newExpense)
  return newExpense
}
addExpense('Латте', 150, 'напиток');
addExpense('Молочный коктейл', 300, 'напиток');


//2 Задание
function printAllExpenses(){
    console.log(expenses)
}
printAllExpenses()


//3 Задание
function getTotalAmount() {
    alsum = 0;                  
    let e = expenses.length
    while (e > -1) { //подсчет суммы
        e--;  // последний элемент               
        if (e >= 0) {  // если индекс последнего элемента не меньше 0
            alsum += expenses[e]["сумма"] // к alsum приравнимавается сумма (индекс элемента) из массива
        }
    }

    let i = expenses.length;
    console.log("Чек:") //ну чек по той же механике
    while (i > -1) {
        i--;
        if (i >= 0) {
            console.log(expenses[i]["название"] + " : " + expenses[i]["сумма"] + " руб." )
        }
    } 

    return console.log("Сумма расходов:", alsum)
}
getTotalAmount()


//Задание 4
function getExpensesByCategory() {
  let category = prompt("Введите категорию для фильтрации:");
  let filtered = []; // массив расходов указанной категории
  let nutipsum = 0; // сумма по категории

  // перебираем расходы
  for (let i = 0; i < expenses.length; i++) { //если i меньше длины массива, то прибавить
    if (expenses[i]["категория"] === category) { // i это индекс у нас будет ага
      filtered.push(expenses[i]) // push - добавить с конца в массив расходов категории
      nutipsum += expenses[i]["сумма"] //прибавление суммы
    }
  }

  // Выводим пользователю сумму по категории
  console.log("На категорию " + category + " потрачено: " + nutipsum)
  return filtered
}
getExpensesByCategory()


//Задание 5 
function findExpenseByTitle() {
    let userSearch = prompt("Введите название для поиска:");
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i]["название"].includes(userSearch)) { 
            console.log("найдено:", expenses[i])
            return expenses[i]
        }
    }
    
    console.log("таких нет");
    if (userSearch) {
        let addNew = confirm("Хотите добавить новый расход?");
        if (addNew) {
            let summ = prompt("сумма:")
            let category = prompt("категория:")
            if (amount && category) {
                let newExpense = addExpense(userSearch, Number(summ), category);
                console.log("новый расход:", newExpense);
                return newExpense; 
            }
        }
    }
    console.log("моё дело предложить, ваше - отказаться");
    return null; 
}
findExpenseByTitle()


//Задание 7 
function deleteExpenseById() {
  let id = prompt("Введите id расхода для удаления:");
  if (id === null) { // проверка на ввод не пустатоты
    console.log("удаление отменено");
    return null;
  }
  let idStr = String(id).trim(); //преобразование айти в строковую переменную, трим удаляет пробелы 
  for (let i = 0; i < expenses.length; i++) { //поиск нужного айди 
    if (String(expenses[i].id) === idStr) {
      let deleted = expenses.splice(i, 1)[0];// splice значит удалить 1 элемент по индексу i 
      console.log("удалён расход:", deleted);
      return deleted;
    }
  }
  console.log("расход с id " + id + " не найден");
  return null;
}
deleteExpenseById();

// статистика по категориям
function getCategoryStatistics() {
  if (expenses.length === 0) { //проверка на нулевой массив
    console.log("нет расходов для статистики");
    return {};
  }
  let category = prompt("Введите категорию для просмотра статистики:");
  if (category === null) { //проверка на пустоту
    console.log("просмотр отменён");
    return {};
  }

  category = category.trim();//минус пробелы 
    let filtered = []; //масив для расходов по услоию
    let total = 0; //для суммы расходов
    for (let item of expenses) { //перебирает каждый элемент массивва
        if (item["категория"] === category) {
            filtered.push(item);//добавляет в массив 
            total += item["сумма"];//добавляет сумму
        }
    }

    console.log("Статистика по категории " + category );
    console.log("Количество расходов:" + filtered.length);
    console.log("Общая сумма: " + total);
    return { category, count: filtered.length, total };
}
getCategoryStatistics();

//Задание 6 
let expenseTracker = {
  expenses: expenses,
  addExpense: addExpense,
  printAllExpenses: printAllExpenses,
  getTotalAmount: getTotalAmount,
  getExpensesByCategory: getExpensesByCategory,
  findExpenseByTitle: findExpenseByTitle,
  deleteExpenseById: deleteExpenseById,
  getCategoryStatistics: getCategoryStatistics
};

