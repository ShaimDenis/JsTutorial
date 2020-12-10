//1 переменные
//ctrl + x удаление строки
//camelCase
//';'  
// var firstName = "name" // устаревшая форма, значение переменной можно изменять
// const lastName = "lastname" // неизменяемая переменная
// let age = 26 // изменяемая переменная. Видна только в локальной области видимости, 
// const isProgrammer = true

// const _ = 'private'
// const $ = 'some value'

// const if = 'mk' //is error
//const withNum5 = '5'
//const 5withNum = 5 // is error

//2 мутирование

//const myAge = 29
//console.log('Имя человека:' + firstName + ', возраст: ' + myAge) // '+' - конкатенирование (объединение строк)
//console.log(myAge) //выведет число
//alert('Имя человека:' + firstName + ', возраст: ' + myAge) // alert присутствует в браузере но не в составе языка.

//const lastNamePr = prompt('введите фамилию')
//alert(firstName + ' ' + lastNamePr)

//3 Операторы

// let currYear = 2020
// const firstYear = 1992
// const age = currYear - firstYear

// const a = 10
// const b = 5

// let c = 32
// c += a // c = c + a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currYear++)
// console.log(--currYear)
// console.log(currYear)
// console.log(currYear--)
// console.log(--currYear)
// console.log(currYear)

//4 типы данных
// примитивные типы (не все)
// const isProgrammer = true;
// const name = 'Vladlen'
// const age = 26
// let x 
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x) //undefined
// console.log(typeof null) // выводит object

// 5 приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
// > < >= <= - сравнение
// const isFullAge = currentYear - birthYear >= fullAge // доки mdn precigions

// 6 условные операторы
const courseStatus = 'pending' // ready, fail, pending

if (courseStatus === 'ready') 
{
    console.log('Курс готов')
}

if (courseStatus === 'pending') 
{
    console.log('Курс в разработке')
}

