const toAnswersButton = document.getElementById('toAnswersBtn')

const whatDidYouChose = document.getElementById('whatDidYouChose')

toAnswersButton.addEventListener('mouseover', function() {
    whatDidYouChose.style.display = 'block'
    whatDidYouChose.innerHTML = `<p>Быстрые ответы</p>`
})

toAnswersButton.addEventListener('mouseleave', function() {
    whatDidYouChose.style.display = 'none'
    whatDidYouChose.outerHTML
})

toAnswersButton.onclick = function() {
    window.location.href = 'answers.html'
}

const toPassButton = document.getElementById('toPassBtn')

toPassButton.addEventListener('mouseover', function() {
    whatDidYouChose.style.display = 'block'
    whatDidYouChose.innerHTML = `<p>Оформление пропуска</p>`
})

toPassButton.addEventListener('mouseleave', function() {
    whatDidYouChose.style.display = 'none'
    whatDidYouChose.outerHTML
})

toPassButton.onclick = function() {
    alert('В разработке!')
}

const toContactsButton = document.getElementById('toContactsBtn')

toContactsButton.addEventListener('mouseover', function() {
    whatDidYouChose.style.display = 'block'
    whatDidYouChose.innerHTML = `<p>Контакты операторов и CallCenter</p>`
})

toContactsButton.addEventListener('mouseleave', function() {
    whatDidYouChose.style.display = 'none'
    whatDidYouChose.outerHTML
})

toContactsButton.onclick = function() {
    window.location.href = 'contacts.html'
}

const toWorksButton = document.getElementById('toWorksBtn')

toWorksButton.addEventListener('mouseover', function() {
    whatDidYouChose.style.display = 'block'
    whatDidYouChose.innerHTML = `<p>Плановые работы</p>`
})

toWorksButton.addEventListener('mouseleave', function() {
    whatDidYouChose.style.display = 'none'
    whatDidYouChose.outerHTML
})

toWorksButton.onclick = function() {
    alert('В разработке!')
}

const toRouteButton = document.getElementById('toRouteBtn')

toRouteButton.addEventListener('mouseover', function () {
    whatDidYouChose.style.display = 'block'
    whatDidYouChose.innerHTML = `<p>Маршрутизация задач</p>`
})

toRouteButton.addEventListener('mouseleave', function () {
    whatDidYouChose.style.display = 'none'
    whatDidYouChose.outerHTML
})

toRouteButton.onclick = function() {
    alert('В разработке!')
}

const toNotesButton = document.getElementById('toNotesBtn')

toNotesButton.addEventListener('mouseover', function() {
    whatDidYouChose.style.display = 'block'
    whatDidYouChose.innerHTML = `<p>Мои заметки</p>`
})

toNotesButton.addEventListener('mouseleave', function() {
    whatDidYouChose.style.display = 'none'
    whatDidYouChose.outerHTML
})

toNotesButton.onclick = function() {
    window.location.href = 'notes.html'
}