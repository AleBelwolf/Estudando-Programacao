let data = new Date()
let hora = data.getHours() 
//let hora = 10
let min = data.getMinutes()

let lhora = document.querySelector(`p#hours`)
lhora.innerHTML = (`Agora são ${hora}:${min}`)

let img = document.querySelector('img#foto')

function carregar() {
    if (hora >= 0 && hora < 12) {
        let Dia = document.querySelector(`h2#res`)
        Dia.innerHTML = (`Bom Dia`)
        img.src = 'afternoon.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom left,rgb(241, 177, 37)30%, rgb(29, 29, 29))'
    }
    else if (hora >= 12 && hora < 18) {
        let Tarde = document.querySelector(`h2#res`)
        Tarde.innerHTML = (`Boa Tarde`)
        img.src = 'fim-da-tarde.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to top,rgb(241, 177, 37), rgba(17, 23, 77, 0.925)80%)'
    }
    else {
        let Noite = document.querySelector(`h2#res`)
        Noite.innerHTML = (`Boa Noite`)
        img.src = 'noite.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to top,rgb(4, 4, 4), rgba(20, 25, 70, 0.925)90%)'
    }
}