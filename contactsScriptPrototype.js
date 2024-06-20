const buttonDisplayOXY = document.getElementById('contactsDisplayOXYbtn')
const buttonDisplayOP = document.getElementById('contactsDisplayOPbtn')
const buttonDisplayCC = document.getElementById('contactsDisplayCCbtn')
const buttonDisplayPASS = document.getElementById('contactsDisplayPASSbtn')

const contactsChooseBoxPaper = document.getElementById('contactsChooseBoxPaper')

let toDispChoosedContent = document.getElementById('choosedArgArea')

let choosedAgrumentAreaToHTML = document.getElementById('choosedArgAreaToDisp')

buttonDisplayOXY.onclick = function() {
    toDispChoosedContent.style = 'display: flex;'
    choosedAgrumentAreaToHTML.innerHTML = `
    <div class="OXYContacts_box" id="OXYBox">
    <h class="OXYContacts_box_header" id="OXYBoxHeader">Служба Тех. Поддержки</h>
    <p class="OXYContacts_box_textcontent" id="OXYBoxText">Почта: help@o2xygen.ru <br>Телефон: +7 495 933 55 99</p>
    <br>
    <h class="OXYContacts_box_header" id="OXYBoxHeaderOffice">Офис Менеджеры</h>
    <p class="OXYContacts_box_textcontent" id="OXYBoxTextOffice">Почта: info@o2xygen.ru <br>Телефон: +7 495 935 72 00</p>
    <br>
    <h class="OXYContacts_box_header" id="OXYBoxHeaderCallCenter">UnicreditBank CallCenter</h>
    <p class="OXYContacts_box_textcontent" id="OXYBoxTextCallCenter">Почта: callcenter@o2xygen.ru <br>Телефон: +7 495 397 2 377</p>
    </div>
    `
    const OXYBox = document.getElementById('OXYBox')
    OXYBox.style = 'display: grid; border-top: 1px solid white; border-bottom: 1px solid white; padding: 10px;'

    const OXYBoxHeader = document.getElementById('OXYBoxHeader')
    OXYBoxHeader.style = 'font-size: 20px; color: white; text-align: center; width: 400px; background-color: rgba(25,25,25,0.9); padding: 10px; border-radius: 5px'

    const OXYBoxText = document.getElementById('OXYBoxText')
    OXYBoxText.style = 'color: white; font-size: 20px; width: 400px; background-color: rgba(25,25,25,0.9); border-radius: 5px; margin-top: 2%; padding: 10px; line-height: 1.5;'

    const OXYBoxHeaderOffice = document.getElementById('OXYBoxHeaderOffice')
    OXYBoxHeaderOffice.style = 'font-size: 20px; color: white; text-align: center; width: 400px; background-color: rgba(25,25,25,0.9); padding: 10px; border-radius: 5px'

    const OXYBoxTextOffice = document.getElementById('OXYBoxTextOffice')
    OXYBoxTextOffice.style = 'color: white; font-size: 20px; width: 400px; background-color: rgba(25,25,25,0.9); border-radius: 5px; margin-top: 2%; padding: 10px; line-height: 1.5;'

    const OXYBoxHeaderCallCenter = document.getElementById('OXYBoxHeaderCallCenter')
    OXYBoxHeaderCallCenter.style = 'font-size: 20px; color: white; text-align: center; width: 400px; background-color: rgba(25,25,25,0.9); padding: 10px; border-radius: 5px'

    const OXYBoxTextCallCenter = document.getElementById('OXYBoxTextCallCenter')
    OXYBoxTextCallCenter.style = 'color: white; font-size: 20px; width: 400px; background-color: rgba(25,25,25,0.9); border-radius: 5px; margin-top: 2%; padding: 10px; line-height: 1.5;'
}

buttonDisplayOP.onclick = function() {
    toDispChoosedContent.style = 'display: flex;'
    choosedAgrumentAreaToHTML.innerHTML = `
    <div class="OPContacts_box" id="OPBox">
    <p id="OPBoxHeader">Выберите оператора из списка для отображения контактов:</p>
    <select id="OPSelect">
    <option>МАСТЕРТЕЛ</option>
    <option>ТЕЛЕКОМ БИРЖА</option>
    <option>МАРАФОН</option>
    <option>RETN</option>
    <option>NetOne</option>
    <option>Ростелеком</option>
    <option>ЮЛ-КОМ</option>
    <option>Orange</option>
    </select>

    <div id="selectedInner"></div>
    </div>
    `

    const OPBoxHeader = document.getElementById('OPBoxHeader')
    OPBoxHeader.style = 'font-size: 20px; text-align: center; color: white; background-color: rgba(25,25,25,0.9); border-radius: 5px; padding: 10px;'
    const OPSelect = document.getElementById('OPSelect')
    OPSelect.style = 'width: 420px; font-size: 20px; padding: 10px; margin-top: 2%; border-radius: 2px;'

    let SelectedInner = document.getElementById('selectedInner')

    OPSelect.addEventListener('change', function() {
        if (OPSelect.value === 'МАСТЕРТЕЛ') {
            SelectedInner.innerHTML = `<p>Почта: ${opMastertel.email} <br>Телефон: ${opMastertel.phone}</p>`
        }
        else if (OPSelect.value === 'МАРАФОН') {
            SelectedInner.innerHTML = `<p>Почта: ${opMaraphon.email} <br>Телефон: ${opMaraphon.phone}</p>`
        }
        else if (OPSelect.value === 'ТЕЛЕКОМ БИРЖА') {
            SelectedInner.innerHTML = `<p>Почта: ${opTCB.email} <br>Телефон: ${opTCB.phone}</p>`
        }
        else if (OPSelect.value === 'RETN') {
            SelectedInner.innerHTML = `<p>Почта: ${opRETN.email} <br>Телефон: ${opRETN.phone}</p>`
        }
        else if (OPSelect.value === 'NetOne') {
            SelectedInner.innerHTML = `<p>Почта: ${opNetOne.email} <br>Телефон: ${opNetOne.phone}</p>`
        }
        else if (OPSelect.value === 'Ростелеком') {
            SelectedInner.innerHTML = `<p>Почта: ${opRTC.email} <br>Телефон: ${opRTC.phone}</p>`
        }
        else if (OPSelect.value === 'ЮЛ-КОМ') {
            SelectedInner.innerHTML = `<p>Почта: ${opULCM.email} <br>Телефон: ${opULCM.phone}</p>`
        }
        else if (OPSelect.value === 'Orange') {
            SelectedInner.innerHTML = `<p>Почта: ${opOrange.email} <br>Телефон: ${opOrange.phone}</p>`
        }
        else {
            alert('Выберите оператора из выпадающего списка!')
        }
    })

    SelectedInner.style = 'color: white; font-size: 20px; margin-top: 2%; background-color: rgba(25,25,25,0.9); padding: 10px; border-radius: 5px;'

    OPBox.style = 'border-top: 1px solid white; border-bottom: 1px solid white; padding: 10px'
}

buttonDisplayCC.onclick = function() {
    toDispChoosedContent.style = 'display: flex;'
    choosedAgrumentAreaToHTML.innerHTML = `
    <div class="CCContacts_box" id="CCBox">
    <p id="CCBoxHeader">Выберите город из списка для отображения контактов:</p>
    <select id="CCSelect">
    <option>АРХАНГЕЛЬСК</option>
    <option>БАРНАУЛ</option>
    <option>БЕЛГОРОД</option>
    <option>ИРКУТСК</option>
    <option>КАЗАНЬ</option>
    <option>КАМЕНСК-ШАХТИНСКИЙ</option>
    <option>КРАСНОЯРСК</option>
    <option>ЛИПЕЦК</option>
    <option>НОВОРОССИЙСК</option>
    <option>ОМСК</option>
    <option>САРАТОВ</option>
    <option>СОЛИКАМСК</option>
    <option>СОЧИ</option>
    <option>САНКТ-ПЕТЕРБУРГ</option>
    <option>ТЮМЕНЬ</option>
    </select>

    <div id="selectedInner"></div>
    </div>
    `

    const CCBoxHeader = document.getElementById('CCBoxHeader')
    CCBoxHeader.style = 'font-size: 20px; text-align: center; color: white; background-color: rgba(25,25,25,0.9); border-radius: 5px; padding: 10px;'

    const CCSelect = document.getElementById('CCSelect')
    CCSelect.style = 'width: 420px; font-size: 20px; padding: 10px; margin-top: 2%; border-radius: 2px;'

    let selectedInner = document.getElementById('selectedInner')

    CCSelect.addEventListener('change', function() {
        if (CCSelect.value === 'АРХАНГЕЛЬСК') {
            selectedInner.innerHTML = `<p>Почта: ${ccArkhangelsk.email} <br>Телефон: ${ccArkhangelsk.phone}</p>`
        }
        else if (CCSelect.value === 'БАРНАУЛ') {
            selectedInner.innerHTML = `<p>Почта: ${ccBarnaul.email} <br>Телефон: ${ccBarnaul.phone}</p>`
        }
        else if (CCSelect.value === 'ИРКУТСК') {
            selectedInner.innerHTML = `<p>Почта: ${ccIrkutsk.email} <br>Телефон: ${ccIrkutsk.phone}</p>`
        }
        else if (CCSelect.value === 'БЕЛГОРОД') {
            selectedInner.innerHTML = `<p>Почта: ${ccBelgorod.email} <br>Телефон: ${ccBelgorod.phone}</p>`
        }
        else if (CCSelect.value === 'КАЗАНЬ') {
            selectedInner.innerHTML = `<p>Почта: ${ccKazan.email} <br>Телефон: ${ccKazan.phone}</p>`
        }
        else if (CCSelect.value === 'КАМЕНСК-ШАХТИНСКИЙ') {
            selectedInner.innerHTML = `<p>Почта: ${ccKamenskSchakhtinsky.email} <br>Телефон: ${ccKamenskSchakhtinsky.phone}</p>`
        }
        else if (CCSelect.value === 'КРАСНОЯРСК') {
            selectedInner.innerHTML = `<p>Почта: ${ccKranoyarsk.email} <br>Телефон: ${ccKranoyarsk.phone}</p>`
        }
        else if (CCSelect.value === 'ЛИПЕЦК') {
            selectedInner.innerHTML = `<p>Почта: ${ccLipetsk.email} <br>Телефон: ${ccLipetsk.phone}</p>`
        }
        else if (CCSelect.value === 'НОВОРОССИЙСК') {
            selectedInner.innerHTML = `<p>Почта: ${ccNovorossiysk.email} <br>Телефон: ${ccNovorossiysk.phone}</p>`
        }
        else if (CCSelect.value === 'ОМСК') {
            selectedInner.innerHTML = `<p>Почта: ${ccOmsk.email} <br>Телефон: ${ccOmsk.phone}</p>`
        }
        else if (CCSelect.value === 'САРАТОВ') {
            selectedInner.innerHTML = `<p>Почта: ${ccSaratov.email} <br>Телефон: ${ccSaratov.phone}</p>`
        }
        else if (CCSelect.value === 'СОЛИКАМСК') {
            selectedInner.innerHTML = `<p>Почта: ${ccSolikamsk.email} <br>Телефон: ${ccSolikamsk.phone}</p>`
        }
        else if (CCSelect.value === 'СОЧИ') {
            selectedInner.innerHTML = `<p>Почта: ${ccSochi.email} <br>Телефон: ${ccSochi.phone}</p>`
        }
        else if (CCSelect.value === 'САНКТ-ПЕТЕРБУРГ') {
            selectedInner.innerHTML = `<p>Почта: ${ccSaintPetersburg.email} <br>Телефон: ${ccSaintPetersburg.phone}</p>`
        }
        else if (CCSelect.value === 'ТЮМЕНЬ') {
            selectedInner.innerHTML = `<p>Почта: ${ccTumen.email} <br>Телефон: ${ccTumen.phone}</p>`
        }
    })

    selectedInner.style = 'color: white; font-size: 20px; margin-top: 2%; background-color: rgba(25,25,25,0.9); padding: 10px; border-radius: 5px;'

    let CCBox = document.getElementById('CCBox')
    CCBox.style = 'border-top: 1px solid white; border-bottom: 1px solid white; padding: 10px'
}

buttonDisplayPASS.onclick = function() {
    // toDispChoosedContent.style = 'display: flex;'
    // choosedAgrumentAreaToHTML.innerHTML = `
    // <div class="passNhrefs_box" id="passNhrefsBOX">
    // <div class="passNhrefs_box_header" id="passNhrefsBOXheader"><p>Список ссылок и паролей:</p></div>
    // <div class="passNhrefs_box_paper" id="passNhrefsBOXpaper">
    
    // </div>
    // </div>`

    alert('В разработке!')

    // let passNhrefsBOXheader = document.getElementById('passNhrefsBOXheader')
    // passNhrefsBOXheader.style = 'display: flex; color: white; background-color: rgba(25,25,25,0.9); padding: 10px; border-radius: 5px; width: 400px; font-size: 20px;'
}