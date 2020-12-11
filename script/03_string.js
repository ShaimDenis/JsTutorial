// const name = 'Имя'
// const age = 26

// function getAge()
// {
//     return age    
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'А' : 'В'} лет.`
// const output = `
//     <div>This is div</div>
//     <p>this is p</p>
// `
// console.log(output)

// const name1 = 'Name'
// console.log(name1.length)
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())
// console.log(name1.charAt(2))
// console.log(name1.indexOf('ame')) // если нет выводит -1, если да
// console.log(name1.toLowerCase().startsWith('na'))
// console.log(name1.startsWith('Na'))
// console.log(name1.endsWith('me!'))
// console.log(name1.repeat(3))
// const stringPas = '   password   '
// console.log(stringPas)
// console.log(stringPas.trim())
// console.log(stringPas.trimLeft())
// console.log(stringPas.trimRight())


// новый синтаксис
// function logPerson(s, name, age)
// {
//     //console.log(s, name, age)
//     //return 'Info about person'
//     if  (age < 0)
//     {
//         age = 'Ещё не родился'
//     }
//     return`${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'Name'
// const personAge = 26
// const personAge2 = -26

// // в `` формируется массив параметров  ["Имя: ", ", Возраст: ", "!"] имеет смысл для валидации
// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!` 
// const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge2}!`
// console.log(output)
// console.log(output2)
