const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
// const people = [
//   {name: 'Vladilen', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Рено') // добавляет новый элемент в конец массива
// cars.unshift('Волга') // добавляет новый элемент в начало
//
// const firstCar = cars.shift() // удаляет первый элемент из массива и возвращает его
// const lastCar = cars.pop() // удаляет последний элемент из массива и возвращает его
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse()) // переворачивает массив наоборот (первый -> последний)
// console.log(cars)

// indexOf хорошо работает с примитывными типами string, int и т.д.
// для объектов лучше findIndex
// const index = cars.indexOf('БМВ') // поиск индекса элемента массива, если такого элемента нет возвращает -1
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }

// console.log(findedPerson)

// function(person) { ... } - это анонимная функция (без имени). 
// findIndex это по сути цикл, т.к. итеративно пробегаемся по всему массиву
// const index = people.findIndex(function(person) {
//   return person.budget === 3500
// })

// find возвращает сам объект (элемент массива) удовлетворяющий условиям
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// console.log(person)

// Удобная запись через лямбда - функции
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// includes - есть ли такой элемент (true/false)
// console.log(cars.includes('Мазда!'))

// Методы высокого порядка 
// map - выполняет преобразование каждого элемента массива, возвращает новый массив
// функции в (...) не вызываются, а передаются
// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
//
const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// fib - массив Фибоначи (строка 7)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// filter - фильтрует массив согласно условию, создается новый отфильтрованный массив
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'

// split - разделяет строку по разделителю 
// reverse переворачивает массив
// join - объединяет элементы массива добаляя между ними заданныйсимвол
// по умолчанию между элементами ставится ','

// const reverseText = text.split('').reverse().join('')  
// console.log(reverseText)

const people = [
  {name: 'Vladilen', budget: 4200},
  {name: 'Elena', budget: 3500},
  {name: 'Victoria', budget: 1700}
]

// reduce - принимает функцию и начальное значение
// применяет переданную функцию к каждому элементу и возвращает одно результирующее значение
const allBudget = people
  .filter(person => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)

console.log(allBudget)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)