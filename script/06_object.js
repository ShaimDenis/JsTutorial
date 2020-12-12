const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // следующий ключ рассчитывается на ходу
    // ['key_' + (1 + 3)]: 'Computed Key', // key_4
    // greet - это метод, т.к. расположен в объекте
    greet() {
      console.log('greet from person')
    },
    info() {
      // this - это текущий экземпляр объекта (контекст)
      // console.log('this:', this)
      console.info('Информация про человека по имени:', this.name)
    }
  }
  
  // console.log(person.name)
  // const ageKey = 'age'
  // console.log(person[ageKey])
  
  // Правильное обращение к строковому ключу
  // console.log(person['complex key'])
  // person.greet()
  
  // person.age++
  // person.languages.push('by')
  // // person['key_4'] = undefined
  
  // Удаление ключа из объекта
  // delete person['key_4']
  
  // console.log(person)
  // console.log(person['key_4'])
  
  // синтаксис по получению данных можно упростить (используем деструкторизацию) 
  // const name = person.name
  // const age = person.age
  // const languages = person.languages
  
  // деструктуризируем объект person на нужные составные части
  // обращение идет к полю age и значение заносится в переменную personAge, 
  // при этом в нем значение по умолчанию указано 10
  // const {name, age: personAge = 10, languages} = person
  // console.log(person)
  
  // Итерирование по ключам (полям) объекта
  // в key записывается в виде строки название ключа
  // person[key] дает значение ключа
  //
  // !!! проблема цилка for in в том, что цикл может итерироваться по прототипам (предкам) объекта
  // это может вызвать непредсказуемое поведение.
  // Для нивелирования проблемы можно использовать проверку hasOwnProperty(key) 
  // for (let key in person) {
  //   if (person.hasOwnProperty(key)) {    
  //     console.log('key:', key)
  //     console.log('value:', person[key])
  //   }
  // }

  // современный защищенный вариант итерирования по ключам объекта
  // Object.keys(person).forEach((key) => {
  //   console.log('key:', key)
  //   console.log('value:', person[key])
  // })
  
  // Context
  // person.info()
  
  const logger = {
    keys() {
      console.log('Object Keys: ', Object.keys(this))
    },
  
    // bind - привязывает какой-либо контекст. К примеру Object.keys(this) выдаст ключи person, 
    // если прописано logger.keys.bind(person)  
    // при этом bind - возыращает функцию, которую потом можно вызвать в любое время
    // call - привязывает контекст и сразу же вызывает получившуюся функцию
    keysAndValues() {
      // "key": value
      // Object.keys(this).forEach(key => {
      //   console.log(`"${key}": ${this[key]}`)
      // })
      
      // !!! function задает свой собственный контекст поэтому this и описанная в function this[key]
      // относятсяк разным контекстам.
      // this - к контексту, которое зададут извне.
      // this[key] - к контексту function
      // Варианты решения: 
      // 1. сохранить контекст (пример self) и this[key] заменить на self[key]
      // const self = this
      // 2. там где заканчивается function привязать контекст this, т.е. function() {}.bind(this)
      // 3. использовать стрелочные функции (лямбда выражения) - они не создают свой контекст 
      Object.keys(this).forEach(function(key) {
        console.log(`"${key}": ${this[key]}`)
      }.bind(this))
    },
  
    withParams(top = false, between = false, bottom = false) {
      if (top) {
        console.log('------- Start -------')
      }
      Object.keys(this).forEach((key, index, array) => {
        console.log(`"${key}": ${this[key]}`)
        // если нужен делиметр посередине и элемент не является последним 
        if (between && index !== array.length - 1) {
          console.log('--------------')
        }
      })
  
      if (bottom) {
        console.log('------- End -------')
      }
    }
  }
  
  // const bound = logger.keys.bind(person)
  // bound()
  // logger.keysAndValues.call(person)

  // person - это контекст,  а далее это параметры метода withParams 
  logger.withParams.call(person, true, true, true) 
  // apply тоже самое что и call только принимает параметры метода withParams в виде массива
  logger.withParams.apply(person, [true, true, true])