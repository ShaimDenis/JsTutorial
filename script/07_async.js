// Event Loop

// асинхронность везде, в том числе Ajax запросы (обновление данных страницы без обновления всей страницы)

// на вход передается функция, которая будет выполняться и задержка времени в милисек перед вызовом
// const timeout = setTimeout(() => {
//   console.log('After timeout')
// }, 2500)

// Очищаем timeout, функция переданная выше в timeout никогда не будет вызвана
// clearTimeout(timeout)

// на вход передается функция, которая будет выполняться периодически с интервалом времени в милисек между вызовом
// const interval = setInterval(() => {
//   console.log('After timeout')
// }, 1000)

// Очищаем interval, функция переданная выше в interval никогда не будет вызвана
// clearInterval(interval)

// Дубпирование поведение
// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }
//
// delay(() => {
//   console.log('After 2 seconds')
// }, 2000)

// используется промис - оборачивает асинхронный код имеет методы then(), catch(), finally()
// Удобство промисов (нивелирование древовидной структуры обратных вызовов функций (callback hell)), все размещено на одном уровне
// чтобы получить доступ и использования промис он возвращается из текущей функции (return)
// Данный пример:
// resolve - то что нужно выполнить в нормальном режиме,
// reject - выполняется в случае ошибки (через блок catch будет выведен reject)
const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve()
        reject('Что-то пошло не так. Повторите попытку')
      }, wait)
    })
    return promise
  }
  
  //  
  // delay(2500)
  //   .then(() => {
  //     console.log('After 2 seconds')
  //   })
  //   .catch(err => console.error('Error:', err))
  //   .finally(() => console.log('Finally'))
  
  const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
  ]))
  
  // getData().then(data => console.log(data))
  
  // асинхронность через async/await
  // пока не будет выполнена функция после await, код далее выполняться не будет, при этом блокирования главного потока не будет
  async function asyncExample() {
    try {
      await delay(3000)
      const data = await getData()
      console.log('Data', data)
    } catch (e) {
      console.log(e)
    } finally {
      console.log('Finally')
    }
  }
  
  asyncExample()