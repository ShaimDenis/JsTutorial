//Числа
// const num = 42 // integer
// const num1 = 42.42 // float
// const pow = 10e3
// console.log(pow)

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow',Math.pow(2, 53)-1) //Number.MAX_SAFE_INTEGER
// console.log('MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)

// console.log(Number.NaN) // выводится как тип число. обозначает не число
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird)) // true
// console.log(Number.isNaN(42)) // false
// console.log(Number.isFinite(Infinity)) // false
// console.log(Number.isFinite(42)) // true

// Парсинг
// const stringInt = '42'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2) // тоже самое
// console.log(+stringInt + 2) // тоже самое

// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

console.log(0.4 + 0.2) // 0.6 not yet
console.log(( 2 / 5 ) + ( 1 / 5 ))
console.log(+((0.4 + 0.2).toFixed(1)))
console.log(parseFloat((0.4 + 0.2).toFixed(1)))


// 2 BigInt
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(typeof 9007199254740991999999999n)
// console.log(9007199254740991999999999n - 9007199254750991999999999n)
// console.log(-9007199254740991999999999n)
// console.log(-9007199254740991999999999.211n) // error
// console.log(10n - 4) // error
// приведение к типу
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n /2n) // 2n

//3 Math

// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(5 ,3))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9)) // округляет до минимального ближайшего целого
// console.log(Math.ceil(4.9)) // округляет до максимального ближайшего целого
// console.log(Math.round(4.9)) // округляет к ближайшему целому
// console.log(Math.trunc(4.9)) // отбрасывает дробную часть
// console.log(Math.sin())
// console.log(Math.random())

// 4 example

// function getRandomBetween(min, max)
// {
//     return Math.floor(Math.random() * (max - min) + min) + 1
// }

// console.log(getRandomBetween(10, 42))