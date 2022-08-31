/* Ver senha */
let verSenha = document.querySelector('#verSenha')
let verConfirmeSenha = document.querySelector('#verConfSenha')

verSenha.addEventListener('click', ()=>{
    let senha = document.querySelector('#senha')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text');
    }else{
        senha.setAttribute('type', 'password');
    }
})
verConfirmeSenha.addEventListener('click', ()=>{
    let confirmeSenha = document.querySelector('#confirmSenha')

    if(confirmeSenha.getAttribute('type') == 'password'){
        confirmeSenha.setAttribute('type', 'text');
    }else{
        confirmeSenha.setAttribute('type', 'password');
    }
})

/* Validação*/

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
validNome = false

let Usuario = document.querySelector('#nomeUsuario')
let labelUsuario = document.querySelector('#labelnomeUsuario')
let validusuario = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#LabelEmail')
let validemail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelSenha')
let validsenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelconfirmSenha = document.querySelector('#labelConfirmSenha')
let validconfirmsenha = false

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: #ff8b8b')
        labelNome.innerHTML = 'Mínimo de 3 caracteres'
        nome.setAttribute('style', 'border-bottom: 2px solid #ff8b8b')
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: #22ff22')
        nome.setAttribute('style', 'border-bottom: 2px solid #22ff22')
        labelNome.innerHTML = 'Nome:'
        validNome = true
    }
})

Usuario.addEventListener('keyup', ()=>{
    if(Usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: #ff8b8b')
        Usuario.setAttribute('style', 'border-bottom: 2px solid #ff8b8b')
        labelUsuario.innerHTML = 'Usuario: Mínimo 5 caracteres!'
        validusuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: #22ff22')
        Usuario.setAttribute('style', 'border-bottom: 2px solid #22ff22')
        labelUsuario.innerHTML = 'Nome de Usuario:'
        validusuario = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 7){
        labelemail.setAttribute('style', 'color: #ff8b8b')
        email.setAttribute('style', 'border-bottom: 2px solid #ff8b8b')
        labelemail.innerHTML = 'Email invalido'
        validemail = false 
    }else{
        labelemail.setAttribute('style', 'color: #22ff22')
        email.setAttribute('style', 'border-bottom: 2px solid #22ff22')
        labelemail.innerHTML = 'Email:'
        validemail = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelsenha.setAttribute('style', 'color: #ff8b8b')
        senha.setAttribute('style', 'border-bottom: 2px solid #ff8b8b')
        labelsenha.innerHTML = '6 Dígitos no mínimo:'
        validsenha = false
    }else{
        labelsenha.setAttribute('style', 'color: #22ff22')
        senha.setAttribute('style', 'border-bottom: 2px solid #22ff22')
        labelsenha.innerHTML = 'senha:'
        validsenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if(confirmSenha.value != senha.value){
        labelconfirmSenha.setAttribute('style', 'color: #ff8b8b')
        confirmSenha.setAttribute('style', 'border-bottom: 2px solid #ff8b8b')
        labelconfirmSenha.innerHTML = 'Senha diferente:'
        validconfirmsenha = false
    }else{
        labelconfirmSenha.setAttribute('style', 'color: #22ff22')
        confirmSenha.setAttribute('style', 'border-bottom: 2px solid #22ff22')
        labelconfirmSenha.innerHTML = 'senha confirmada:'
        validconfirmsenha = true
    }
})

function cadastrar(){
    if(validNome && validusuario && validemail && validsenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: Usuario.value,
                emailCad: email.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
    }
}
