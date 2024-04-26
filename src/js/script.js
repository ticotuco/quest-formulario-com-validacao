const form = document.querySelector(".formulario")
const campos = document.querySelectorAll(".campo")
const spans = document.querySelectorAll(".span-erro")


form.addEventListener('submit', (event) => {
    event.preventDefault()
    validarNome()
    validarEmail()
    validarNumero()
    validarMensagem()
})


function mostrarInvalido(index) {
    campos[index].classList.add('invalido')
    campos[index].classList.remove('valido')
    spans[index].style.display = 'block'
}

function mostrarValido(index) {
    campos[index].classList.add('valido')
    campos[index].classList.remove('invalido')
    spans[index].style.display = 'none'
}


function validarNome() {
    if(campos[0].value === "") {
        mostrarInvalido(0)
    } else {
        mostrarValido(0)
    }
}

function validarEmail() {
    if(campos[1].value === '') {
        mostrarInvalido(1)
    } else {
        mostrarValido(1)
    }
}

function validarNumero() {
    if(campos[2].value === '') {
        mostrarInvalido(2)
    } else {
        mostrarValido(2)
    }
}

function validarMensagem() {
    if(campos[3].value === '') {
        mostrarInvalido(3)
    } else {
        mostrarValido(3)
    }
}