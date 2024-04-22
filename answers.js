let ticketNumber = document.getElementById('ttNumber')
let sayHi = document.getElementById('sayHiCheckbox')

const ttCreatedButton = document.getElementById('ttCreatedBtn')
const ttCanWeCloseButton = document.getElementById('ttCanWeCloseBtn')
const ttIsClosedButton = document.getElementById('ttIsClosedBtn')
const ttNeetMoreInfoButton = document.getElementById('ttNeedMoreInfoBtn')
const ttNewInfoCameButton = document.getElementById('ttNewInfoCameBtn')
const ttSolutionButton = document.getElementById('ttSolutionBtn')


let answerToHTML = document.getElementById('answerBoxToHTML')

ttCreatedButton.addEventListener('click', function () {
    if (sayHi.checked) {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Здравствуйте!\n\nДата-центр O2XYGEN информирует вас о регистрации заявки № ${ticketNumber.value}.</textarea>`
    }
    else {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Дата-центр O2XYGEN информирует вас о регистрации заявки № ${ticketNumber.value}</textarea>`
    }

    let copyText = document.getElementById('textForCopy')
    copyText.select ()
    document.execCommand('copy')
})

ttCanWeCloseButton.addEventListener('click', function () {
    if (sayHi.checked) {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Здравствуйте!\n\nПожалуйста, уточните, можем ли мы закрыть заявку № ${ticketNumber.value} в случае, если по ней у вас не осталось больше вопросов?</textarea>`
    }
    else {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Пожалуйста, уточните, можем ли мы закрыть заявку № ${ticketNumber.value} в случае, если по ней у вас не осталось больше вопросов?</textarea>`
    }

    let copyText = document.getElementById('textForCopy')
    copyText.select ()
    document.execCommand('copy')
})

ttIsClosedButton.addEventListener('click', function () {
    if (sayHi.checked) {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Здравствуйте!\n\nДата-центр O2XYGEN информирует вас о закрытии заявки № ${ticketNumber.value}.\n\nПожалуйста, не отвечайте на это письмо кроме случая, если по заявке у вас остались невыясненные вопросы.\n\nРады вам помочь!</textarea>`
    }
    else {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Дата-центр O2XYGEN информирует вас о закрытии заявки № ${ticketNumber.value}.\n\nПожалуйста, не отвечайте на это письмо кроме случая, если по заявке у вас остались невыясненные вопросы.\n\nРады вам помочь!</textarea>`
    }

    let copyText = document.getElementById('textForCopy')
    copyText.select ()
    document.execCommand('copy')
})

ttNeetMoreInfoButton.addEventListener('click', function () {
    if (sayHi.checked) {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Здравствуйте!\n\nДата-центр O2XYGEN информирует о том, что по заявке № ${ticketNumber.value} необходима дополнительная информация:</textarea>`
    }
    else {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Дата-центр O2XYGEN информирует о том, что по заявке № ${ticketNumber.value} необходима дополнительная информация:</textarea>`
    }

    let copyText = document.getElementById('textForCopy')
    copyText.select ()
    document.execCommand('copy')
})

ttNewInfoCameButton.addEventListener('click', function () {
    if (sayHi.checked) {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Здравствуйте!\n\nДата-центр O2XYGEN информирует вас о том, что по заявке № ${ticketNumber.value} появилась дополнительная информация:</textarea>`
    }
    else {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Дата-центр O2XYGEN информирует вас о том, что по заявке № ${ticketNumber.value} появилась дополнительная информация:</textarea>`
    }

    let copyText = document.getElementById('textForCopy')
    copyText.select ()
    document.execCommand('copy')
})

ttSolutionButton.addEventListener('click', function () {
    if (sayHi.checked) {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Здравствуйте!\n\nДата-центр O2XYGEN информирует о том, что по заявке № ${ticketNumber.value} появилось решение:</textarea>`
    }
    else {
        answerToHTML.innerHTML = `<textarea id="textForCopy">Дата-центр O2XYGEN информирует о том, что по заявке № ${ticketNumber.value} появилось решение:</textarea>`
    }

    let copyText = document.getElementById('textForCopy')
    copyText.select ()
    document.execCommand('copy')
})