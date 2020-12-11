// 1 Функции
//Function Declaration
// function greet(name){
//     console.log('Привет -', name)
// }

//Function Expression
// const greet2 = function greetS(name){
//     console.log('Привет 2 -', name)
// }

// greet('Лена')
// greet2('Lena')

// console.log(typeof greet) // типа такого нет, но для удобства выводится пояснение что это такое
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5){
//         clearInterval(interval) // clearTimeout
//     }
//     else {
//         console.log(++counter, 1000)
//     }
// })

// 3 Стрелочные функции
// function greet(name){
//     console.log('Привет -', name)
// }

// const arrow = (name) => {
//     console.log('Привет -', name)
// }

// const arrow2 = name => console.log('Привет -', name)


// arrow('MyName')
// arrow2('MyName')

// const pow2 = num => num ** 2
// console.log(pow2(5))

// const sum = (a, b) => a + b
// console.log(sum(41, 1))
// console.log(sum(41)) // NAN


// 4 Параметры по умолчанию
// const sum2 = (a = 40, b = a * 2) => a + b
// console.log(sum2(41, 1)) //42
// console.log(sum2()) //120

// function sumAll(...all){ //... - rest оператор собирает все числа
//     //console.log(all)
//     let res = 0
//     for (let num of all) {
//         res += num
//     }
//     return res
// }

// const result = sumAll(1, 2, 3, 4, 5)
// console.log(result)

// 5 замыкания
// Основное преимущество это создание приватных переменных (на следующем примере доступа из внутренней функции к name ограничен)
function createMember(name) {
    // внешняя функция вернет описанную ниже функцию, при этом значение параметра name будет зафиксировано тем,
    // которым задали при вызове функции createMember
    return function(lastname) {
        console.log(name + ' ' + lastname)
    }
}

const logWithLastName = createMember('Name')
console.log(logWithLastName('lastName1'))
console.log(logWithLastName('lastName2'))
