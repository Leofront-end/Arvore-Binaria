let titulo = document.querySelector("h3")

let esse = document.querySelector(".esse")
let maior = document.querySelector(".maior")
let menor = document.querySelector(".menor")
let tentativas = document.querySelector("p")

let mostrarNumerosAnteriores = document.querySelector('.Array')
let chute = 0
let meio = 0
let contador = 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

let liArray = []
let baixo = 0
let alto = numeros.length - 1
var li

function disativar() {
    esse.setAttribute("disabled", "")
    maior.setAttribute("disabled", "")
    menor.setAttribute("disabled", "")
}

function lista(chute){
    let lista = document.createElement("li")
    lista.textContent = chute
    
    mostrarNumerosAnteriores.appendChild(lista)
    return lista
    
}


while (baixo <= alto) {
    meio = Math.floor((baixo + alto)/2)
    chute = numeros[meio];
    titulo.textContent = `Seu número é ${chute}?`
    

    tentativas.textContent = contador > 1 ? `Tentativas ${contador}` : `Tentativa ${contador}`
    li = lista(chute)
    liArray.push(li)

    liArray.forEach(e => {
        if (e == liArray[liArray.length-1]){
            console.log(e)
            e.classList.add("ativo")
        } else {
            e.classList.remove("ativo")
        }
    })


    esse.addEventListener('click', () => {      
        tentativas.textContent = contador > 1 ? `Tentativas ${contador}` : `Tentativa ${contador}`
        liArray.push(li)

        liArray.forEach(e => {
            if (e == liArray[liArray.length-1]){
                console.log(e)
                e.classList.add("ativo")
            } else {
                e.classList.remove("ativo")
            }
        })
        disativar()
        
    })

    menor.addEventListener('click', () => {
        alto = meio - 1
        meio = Math.floor((baixo + alto)/2)
        chute = numeros[meio];
        titulo.textContent = `Seu número é ${chute}?`

        li = lista(chute)
        liArray.push(li)

        contador++
        tentativas.textContent = contador > 1 ? `Tentativas ${contador}` : `Tentativa ${contador}`
        if (contador == 7) {
            disativar()
        }

        liArray.forEach(e => {
            if (e == liArray[liArray.length-1]){
                console.log(e)
                e.classList.add("ativo")
            } else {

                e.classList.remove("ativo")
            }
        })
        if (li.textContent == 1){
            menor.setAttribute("disabled","")
        }    

    })

    maior.addEventListener('click', () => {
        baixo = meio + 1
        meio = Math.floor((baixo + alto)/2)
        chute = numeros[meio];
        titulo.textContent = `Seu número é ${chute}?`

        li = lista(chute)
        liArray.push(li)

        contador++
        tentativas.textContent = contador > 1 ? `Tentativas ${contador}` : `Tentativa ${contador}`
        if (contador == 7) {
            disativar()
        }

        liArray.forEach(e => {
            if (e == liArray[liArray.length-1]){
                console.log(e)
                e.classList.add("ativo")
            } else {

                e.classList.remove("ativo")
            }
        })

    })
    
    break
}


