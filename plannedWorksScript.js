const taskNumber = document.getElementById('inputTaskNumber')
const typeOfWorks = document.getElementById('selectTypeOfWorks')
const selectService = document.getElementById('selectService')
const addressA = document.getElementById('inputAddressA')
const addressB = document.getElementById('inputAddressB')
const dateA = document.getElementById('inputDateA')
const dateB = document.getElementById('inputDateB')
const timeA = document.getElementById('inputTimeA')
const timeB = document.getElementById('inputTimeB')
const stopList = document.getElementById('selectStopList')
const range = document.getElementById('inputRange')
const generateButton = document.getElementById('generateBtn')

let textToHTML = document.getElementById('textToHTML')
const generatedTexBox = document.getElementById('generatedTextBox')

generateButton.addEventListener('click', function() {
  textToHTML.innerHTML = `Здравствуйте!\n\nДата-центр O2XYGEN информирует о следующих работах:\n\n№ заявки по проведению работ: ${taskNumber.value}\n\nВид работ: ${typeOfWorks.value}\n\nУслуга, которую затрагивают работы: ${selectService.value}\n\nАдреса точки А и точки Б:\nТочка А: ${addressA.value}\nТочка Б: ${addressB.value}\n\nДата и время, когда будут проводиться работы: с ${dateA.value} ${timeA.value} по ${dateB.value} ${timeB.value}\n\nКоличество прерываний и их длительность: ${stopList.value} прерывание, длительностью не более ${range.value} минут.\n\nПожалуйста, подтвердите получение данного оповещения ответным письмом/сообщением`
  generatedTexBox.style.display = 'block'

  textToHTML.select ()
  document.execCommand('copy')
})