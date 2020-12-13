// window - это глобальный объект приложения браузера
// window.alert(1)

// document - это объект полученного html кода
const heading = document.getElementById('hello')
// посмотреть сам объект
//console.dir(heading)
//console.dir(heading.textContent)
// изменение текста из кода внутри соответствующего тега с id='hello'  
//heading.textContent = 'Chanjed from JS'

// получаем псевдомассив типа HTMLCollection без методов  
// const heading2 = document.getElementsByTagName('h2')[0] // legacy
// const heading2 = document.getElementsByClassName('h2-class')[0] // legacy
// современный метод. прописываем css-selector 
// const heading2 = document.querySelector('.h2-class') // Всегда 1 элемент по первому вхождению
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент (в случае с id)
const heading2 = document.querySelector('h2')

// heading2.nextElementSibling получаем следующий объект после heading2 такого же типа как heading2
// const heading3 = heading2.nextElementSibling

// получаем псевдомассив типа NodeList (массив без методов) из элементов, удовлетворяющих css-selector 
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]


setTimeout(() => {
  addStylesTo(heading, 'JavaScript')
}, 1500)

// получаем объект ссылка из заголовка 3
const link = heading3.querySelector('a')

// 
link.addEventListener('click', (event) => {
  event.preventDefault() // отменяет выполнение события
  console.log('Click on link', event.target.getAttribute('href')) // получаем аттрибут (поле объекта)   
  const url = event.target.getAttribute('href')
  // назначаем полученную ссылку для текущей вкладки и переходим по сслыке
  window.location = url
})


setTimeout(() => {
  addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
  addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
}, 4500)

// изменение стиля через js код
function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'black'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'

  // falsy: '', undefined, null, 0, false - в блок if не зайдем
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

// событие. Вариант привязки 1. Здесь привязываем функцию к стандартному событию объекта onclick
heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
  }
}

// событие. Вариант привязки 2. Здесь привязываем функцию к стандартному событию объекта dblclick через метод добавить слушателя
heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'yellow') {
    heading2.style.color = '#000'
    heading2.style.backgroundColor = '#fff'
  } else {
    heading2.style.color = 'yellow'
    heading2.style.backgroundColor = '#000'
  }
})