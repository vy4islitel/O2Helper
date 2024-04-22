ccToHTMLphone = document.getElementById('ccToHTMLphone')
ccToHTMLemail = document.getElementById('ccToHTMLemail')

opToHTMLphone = document.getElementById('opToHTMLphone')
opToHTMLemail = document.getElementById('opToHTMLemail')

selectedCallCenter = document.getElementById('selectedCC')
selectedOperator = document.getElementById('selectedOP')

selectedCallCenter.onchange = function whoisCC () {

    if (selectedCallCenter.value === 'Архангельск') {
        ccToHTMLphone.innerHTML = `${ccArkhangelsk.phone}`
        ccToHTMLemail.innerHTML = `${ccArkhangelsk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Барнаул') {
        ccToHTMLphone.innerHTML = `${ccBarnaul.phone}`
        ccToHTMLemail.innerHTML = `${ccBarnaul.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Белгород') {
        ccToHTMLphone.innerHTML = `${ccBelgorod.phone}`
        ccToHTMLemail.innerHTML = `${ccBelgorod.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Иркутск') {
        ccToHTMLphone.innerHTML = `${ccIrkutsk.phone}`
        ccToHTMLemail.innerHTML = `${ccIrkutsk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Казань') {
        ccToHTMLphone.innerHTML = `${ccKazan.phone}`
        ccToHTMLemail.innerHTML = `${ccKazan.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Каменск-Шахтинский') {
        ccToHTMLphone.innerHTML = `${ccKamenskSchakhtinsky.phone}`
        ccToHTMLemail.innerHTML = `${ccKamenskSchakhtinsky.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Красноярск') {
        ccToHTMLphone.innerHTML = `${ccKranoyarsk.phone}`
        ccToHTMLemail.innerHTML = `${ccKranoyarsk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Липецк') {
        ccToHTMLphone.innerHTML = `${ccLipetsk.phone}`
        ccToHTMLemail.innerHTML = `${ccLipetsk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Новороссийск') {
        ccToHTMLphone.innerHTML = `${ccNovorossiysk.phone}`
        ccToHTMLemail.innerHTML = `${ccNovorossiysk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Омск') {
        ccToHTMLphone.innerHTML = `${ccOmsk.phone}`
        ccToHTMLemail.innerHTML = `${ccOmsk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Саратов') {
        ccToHTMLphone.innerHTML = `${ccSaratov.phone}`
        ccToHTMLemail.innerHTML = `${ccSaratov.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Соликамск') {
        ccToHTMLphone.innerHTML = `${ccSolikamsk.phone}`
        ccToHTMLemail.innerHTML = `${ccSolikamsk.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Сочи') {
        ccToHTMLphone.innerHTML = `${ccSochi.phone}`
        ccToHTMLemail.innerHTML = `${ccSochi.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Санкт-Петербург') {
        ccToHTMLphone.innerHTML = `${ccSaintPetersburg.phone}`
        ccToHTMLemail.innerHTML = `${ccSaintPetersburg.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else if (selectedCallCenter.value === 'Тюмень') {
        ccToHTMLphone.innerHTML = `${ccTumen.phone}`
        ccToHTMLemail.innerHTML = `${ccTumen.email}`
        console.log(ccToHTMLemail, ccToHTMLphone)
    }
    else { 
        alert('Город не выбран!')
    }
}

selectedOperator.onchange = function WhoisOP() {
    if (selectedOperator.value === 'Мастертел') {
        opToHTMLphone.innerHTML = `${opMastertel.phone}`
        opToHTMLemail.innerHTML = `${opMastertel.email}`
    }
    else if (selectedOperator.value === 'Марафон') {
        opToHTMLphone.innerHTML = `${opMaraphon.phone}`
        opToHTMLemail.innerHTML = `${opMaraphon.email}`
    }
    else if (selectedOperator.value === 'NetOne') {
        opToHTMLphone.innerHTML = `${opNetOne.phone}`
        opToHTMLemail.innerHTML = `${opNetOne.email}`
    }
    else if (selectedOperator.value === 'Телеком-Биржа (Cirex)') {
        opToHTMLphone.innerHTML = `${opTCB.phone}`
        opToHTMLemail.innerHTML = `${opTCB.email}`
    }
    else if (selectedOperator.value === 'Юл-Ком') {
        opToHTMLphone.innerHTML = `${opULCM.phone}`
        opToHTMLemail.innerHTML = `${opULCM.email}`
    }
    else if (selectedOperator.value === 'Ростелеком') {
        opToHTMLphone.innerHTML = `${opRTC.phone}`
        opToHTMLemail.innerHTML = `${opRTC.email}`
    }

    else if (selectedOperator.value === 'RETN') {
        opToHTMLphone.innerHTML = `${opRETN.phone}`
        opToHTMLemail.innerHTML = `${opRETN.email}`
    }
    else if (selectedOperator.value === 'Orange') {
        opToHTMLphone.innerHTML = `${opOrange.phone}`
        opToHTMLemail.innerHTML = `${opOrange.email}`
    }
    else {
        alert('Оператор не выбран!')
    }
}