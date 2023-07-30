# Front-JS

- para inicio rapido no vscode, criar um arquivo .html, inserir uma exclamação e dar enter, isso ja gerará um arquivo html5

comentários em javascript // para a linha e /* */ para uma área dentro dos sinais

variaveis são espaços vagos que podem alocar dados, valores e informações. uma variavel pode alocar apenas um valor por vez e, caso esse valor n seja mantido por outra variavel, ele é perdido quando a variavel recebe um valor novo
- podem começar com letras, $ ou _
- não podem começar com números
- podem conter números, letras, acentos e simbolos
- não podem conter espaços
- Lowercases e Uppercases são diferentes, Nome != nome
- não podem ser nomes reservados

# tipos primitivos iniciais:
- Numbers.
- Strings.
- Boolean.
- Null.
- Undefined.
- Object. 
- Function;

 Para identificar o tipo da variavel, utilize a funcão typeof para

# formatação de titulos

- para formatar um number, é possivel fazer isso na sua entrada com Number(comando de entrada(variavel)) ou com Number(variavel) no momento da operação
- para formatar Strings, podesse modifica-las com o comando String(variavel) na hora do uso
- Para formatar Strings, fica a cargo da concatenação 'texto padrão'+variavel ou do uso de templates strings `texto padrão ${variavel}``, sendo obrigatório o uso de crases ao inves de aspas, testes aconselhados de serem feitos no node
- para modificar a String em si, podemos utilizar variavel.length para contar o número de caracteres, variavel.toUpperCase() para tornar todas as letras maiúsculas e variavel.toLowerCase() para tornar todas as letras minúsculas

# Prioridade de operadores, decrescente!
!---Operadores no arquivo referente---!

- parenteses ();
- aritmeticos **, %, *, /, +, -;
- relacionais >, <, >=, <=, ==, !=, ===, !==;
- lógicos !, &&, ||;

salário > 1500 && sexo != 'M' && idade <= 42 - 'essa pessoa ganha mais que 1500, não é um homem e tem menos de 42 anos?'

# Tipos de seletores de elementos na estrutura DOM
Levando em conta que os elementos são derivados da estrutura document, a escrita básica segue o padrão: 
    document.metodoSeletor()

- getElementById(); Retorna um elemento correspondente ao id passado como parâmetro (em formato string). No entanto, caso mais de um elemento possua o id passado como parâmetro, a função retorna o primeiro elemento encontrado. EX:
        <div id = "frase-motivacional" class = "conteudo">
        let frase = document.getElementById("frase-do-dia");

- getElementsByClassName(); Retorna os elementos que possuem uma mesma classe. Esta função retorna uma HTMLCollection (uma coleção) de elementos, estando vazia ou não.
        const amigos = document.getElementsByClassName("amigo");
        HTMLCollection { lista de nomes iniciada no indice 0}

- getElementsByTagName(); Cria uma coleção com todas as tags com o mesmo nome. Caso não exista nenhuma tag com o nome especificado, o retorno é uma HTML Collection vazia.
        let nomeUsuario = document.getElementsByTagName("nome");
        HTMLCollection { lista de nomes iniciada no indice 0}

- getElementsByName(); Cria uma NodeList com todos os elementos de código selecionados pelo atributo {name} dsa tags HTML
        let opiniaoUsuario = document.getElementsByName(`name`);

- querySelector(); Recebe como parametro a mesma roupagem do CSS, com o uso de derivação para encontrar o elemento, {.} para indicar classes e {#} para indicar IDs. Devolve o primeiro elemento

- querySelectorAll(); Mesmo modo de busca que seu antecessor, retorna uma NodeList
        let paragrafo = document.querySelectorAll("p#paragrafo_noticias");

# Eventos DOM
!---pesquisar lista completa na indicação de leitura: https://developer.mozilla.org/en-US/docs/Web/Events ---!
        Tipos populares de eventos:
- mouseenter - mouse entra na área
- mouseout - mouse sai da área
- mousedowm - apertar e segurar
- mouseup - soltar
- mousemove - movimentar o mouse na área
- click - click rápido

# Condições
Estruturas que garantem funcionamento lógico para o código de modo a rodar partes especificas cumprindo funções especificas
Tipos de estruturas:

- condição simples

        if (condição) {
                comando
        }

- condição completa

        if (condição) {
                comando 1
        }
        else {
                comando 2
        }

- condição aninhada

        if (condição 1) {
                if (condição 2) {
                        comando 1
                }
                else {
                        comando 2 
                }
                comando 3
        }
        else {
                comando 4
        }

- condição composta

        if (condição 1) {
                comando 1
        }
        else if (condição 2) {
                comando 2
        }
        else {
                comando 3
        }

- condição multipla

        switch (expressão) {
                case valor1:

                break;
                case valor2:

                break;
                case valor3:
        
                break;
                default:

                break;        
        }

# Dicas iniciais
- linha.innerHtml += `` dá certo
- inputs uteis:
input:number
input:botton
input:radio - usar getElementsByName nesse, com if(var[posição].checked) para verificar qual foi escolhido

# estruturas de repetição
principais tipos
- while(){}, enquanto a condição for respeitada, o fluxo será repetido
- do{} while(), completa a ação pelo menos uma vez, para logo em seguida testar a condição de existência
- for(var inicio = valor; condição numérica de existência;incremento no contador){} mais utilizado quando a condição é numérica, pode ser maleavel, parada somente pela criatividade

# variaveis compostas/vetores
- variavel que aloca n valores fixos sendo diferenciados pela posição
- é possivel adicionar/substituir um valor ao array dando a localização ou usando a função vetor.push()
- vetor.length indica a quantidade de elementos no vetor
- vetor.indexOf(valor), busca o valor dentro do vetor e retorna a posição, caso não exista esse valor noi velor, o valor -1 é retornado

# function
 function ação(parametro) {
        return resultado
 }

 let variavel = ação(valor)

 - recursividade: estado onde uma fuynção se resove se chamando ate alcançar um parametro esperado
exemp:
function fator(n) {
        if (n == 1) {return 1}
        else {return n*fator(n-1)}
}

feito por @uLuizFelipe