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

///////////////////////////
// 5 приоритет операторов
///////////////////////////
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
// > < >= <= - сравнение
// const isFullAge = currentYear - birthYear >= fullAge // доки mdn precigions

///////////////////////
// 6 условные операторы
///////////////////////
// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') 
// {
//     console.log('Курс готов')
// } 
// esle if (courseStatus === 'pending') 
// {
//     console.log('Курс в разработке')
// }

// const isReady = true

// if (isReady) 
// {
//     console.log('ok')
// } 
// else
// {
//     console.log('not ok')
// }
// // тернарный оператор
// isReady ? console.log('ok') : console.log('not ok')


// разница == и ===
// const num1 = 42 // number
// const num2 = '42' // string

// console.log (num1 == num2) // число приводится к строке и две строки сравниваются по значению
// console.log (num1 === num2) // число не приводится к строке.

///////////////////
// 7 булевая логика
///////////////////
// mdn

///////////
//8 функции
///////////

// function calcAge(year)
// {
//     return 2020 - year
// }

// console.log(calculateAge(1993))
// console.log(calculateAge(2019))

// function logInfoAbout(name, year)
// {
    
//     const age = calcAge(year)
//     if(age > 0)
//     {
//         console.log(name +' ' + age)
//     }
// }

// logInfoAbout('Name', 1993)

///////////
//9 массивы
///////////
//const cars = ['Mazda', 'Mers', 'Ford'] //более правильный вариант
// const cars2 = new Array('Mazda', 'Mers', 'Ford')
//console.log(cars2[1]) // в случае выход за пределы массива получаем undefined

// cars2[0] = 'Porshe'
// console.log(cars2[0])

// cars[3] = 'Mazda' // расширяем массив добавляя новый элемент таким образом
// cars2[cars2.length] = 'Mazda'

//////////
//10 циклы
//////////
// const cars = ['Mazda', 'Mers', 'Ford']

// for (let i = 0; i< cars.length; i++)
// {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars)
// {
//     console.log(car)
// }

////////////
//11 объекты
////////////

const person = 
{
    firstName: 'Name',
    lastName: 'last name',
    year: 1992,
    languages: ['Ru', 'En'],
    hasWife: false,
    greet: function() 
    {
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['lastName'])

const key = 'languages'
console.log(person[key])

person.hasWife = true // изменение поля
person.isProgrammer = true // добавляется новое поле (ключ) автоматически
console.log(person)
person.greet()
