

let sucesso = document.getElementById('caixa-sucesso')
let primeiro = document.getElementById('primeiro-conteudo')
let erro = document.getElementById('msg-erro')

let botao = document.getElementById('btn').addEventListener("click", subscribe)
let botao2 = document.getElementById('btn2').addEventListener("click", dismiss)
let email = document.getElementById('email-digitado')
let exibeEmail = document.querySelector('.caixa-conteudo-sucesso strong')







const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function subscribe() {
    let validaEmail = re.test(email.value)
    if (validaEmail === true) {
        sucesso.classList.remove('esconder')
        primeiro.classList.add('esconder')
        sucesso.classList.add('sucesso')
        exibeEmail.innerHTML = email.value        
        
    } else {
        erro.classList.remove('esconder')
        erro.classList.add('error')
        email.classList.remove('input-email')
        email.classList.add('input-email-erro')
        
                         
    }   

}

function dismiss(){
        sucesso.classList.add('esconder')
        primeiro.classList.remove('esconder')
        sucesso.classList.remove('sucesso')
        erro.classList.add('esconder')
        erro.classList.remove('error')
        email.classList.add('input-email')
        email.classList.remove('input-email-erro')
        email.value = ''
}