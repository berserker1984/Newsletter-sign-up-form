const itensMenu = document.getElementById('menu')
const iconeMenu = document.getElementById('icone')  

function exibeMenu() {    
    
    iconeMenu.classList.add('sumir-elemento')
    itensMenu.classList.toggle('exibir-elemento')  
    
}

function fechaMenu() {

    iconeMenu.classList.remove('sumir-elemento')
    itensMenu.classList.remove('exibir-elemento')
    
}