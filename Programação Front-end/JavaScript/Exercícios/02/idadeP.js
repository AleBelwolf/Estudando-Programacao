
function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let fano = document.querySelector('input#dNascimento')
    let res = document.querySelector('p#res')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else {
        let fsex = document.querySelector('input#sexo')
        let idade = anoAtual - fano.value
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        /* 
            document.createElement = Para criar o elemento desejado.
            setAttribute = Para atribuir um id, class, etc..
            <img id='foto'></img>
        */

        if (imas.checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 3){
                // bebe
                img.setAttribute('src', 'bebe-masc.png')
                genero = 'Detectamos um bebê muito fofo'
            }
            else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'masc-crianca.png')
                genero = `Detectamos uma criança de ${idade} anos.`
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'masc-jovem.png')
                genero = `Detectamos um jovem de ${idade} anos.`
            }
            else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'masc-adulto.png')
                genero = `Detectamos um adulto de ${idade} anos.`
            }
            else {
                // idoso
                img.setAttribute('src', 'masc-velho.png')
                genero = `Detectado um jovem velho de ${idade} anos.`
            }
        }
        else if (ifem.checked) {
            genero = 'Mulher'
            
            if (idade >= 0 && idade <= 3){
                // bebe
                img.setAttribute('src', 'bebe-fem.png')
                genero = 'Detectamos um bebê muito fofo'
            }
            else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'fem-crianca.jpeg')
                genero = `Detectamos uma criança de ${idade} anos.`
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fem-jovem.jpeg')
                genero = `Detectamos uma jovem de ${idade} anos.`
            }
            else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'fem-adulta.jpeg')
                genero = `Detectamos um adulto de ${idade} anos.`
            }
            else {
                // idoso
                img.setAttribute('src', 'fem-velha.jpeg')
                genero = `Detectado uma jovem velha de ${idade} anos.`
            }
        }
        res.innerHTML = `${genero}`
        res.appendChild(img)
    }
}