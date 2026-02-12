// Исходные данные
const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

// Задание 1. 
function getActiveUsers(users) {
  return users.filter(user => user.isActive === true);}
console.log('Активные пользователи:', getActiveUsers(users));

// Задание 2. 
const getUserNames = (users) => users.map(user => user.name);
console.log('Имена:', getUserNames(users));

// Задание 3. 
function findUserById(users, id) {
  const found = users.find(user => user.id === id);
  return found !== undefined ? found : null; }
  console.log('Пользователь с id=3:', findUserById(users, 3));

// Задание 4. 
function getUsersStatistics(users) {
  const total = users.length;
  const active = users.filter(user => user.isActive).length;
  const inactive = total - active;
  return { total, active, inactive };}
  console.log('Статистика:', getUsersStatistics(users));

// Задание 5. 
function getAverageAge(users) {
  if (users.length === 0) return 0;
  const sum = users.reduce((acc, user) => acc + user.age, 0);
  return sum / users.length;}
  console.log('Средний возраст:', getAverageAge(users));

// Задание 6. 
function groupUsersByCity(users) {
  return users.reduce((acc, user) => {
    const city = user.city;
    if (!acc[city]) {
      acc[city] = []; 
    }
    acc[city].push(user);
    return acc;
  }, {});
}
console.log('Группировка по городам:', groupUsersByCity(users));
