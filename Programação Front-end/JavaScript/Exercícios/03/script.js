function contar() {
    let inicio = document.querySelector('input#xinicio')
    let fim = document.querySelector('input#xfim')
    let passo = document.querySelector('input#xpasso')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Dados preenchidos incorretamente!')
        res.innerHTML = 'Por favor, preencha corretamente os dados acima.'
    }
    else {
        res.innerHTML = 'Contando . . . <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Valor inválido ! Será considerado valor 1')
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F449}`
            }
        }
        else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}