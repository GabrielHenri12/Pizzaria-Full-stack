/*Login*/
let cadastrados = JSON.parse(localStorage.getItem('listaUser'))
let usuario = document.querySelector('#loginUsuario');
let senha = document.querySelector('#loginsenha');
let logado = false

function logar(){
    let usuarioVerifcado = cadastrados.find(function(item){ return (item.userCad == usuario.value)? true : false;})
    let senhaVerifcado = cadastrados.find(function(item){ return (item.senhacad == senha.value)? true : false;})
    let form = document.querySelector('#formulario')
    
    if(usuarioVerifcado && senhaVerifcado){
        logado = true;
    }else{
        alert('Nome de Usuario ou senha errada')
        form.setAttribute('action', '#')
    }
    let usuarioAtivo = {login: logado, user: usuarioVerifcado}
    localStorage.setItem('UsuarioAtivo', JSON.stringify(usuarioAtivo));
}

/*Ver Senha*/
let verSenha = document.querySelector('#verSenha');
verSenha.addEventListener('click', ()=>{
    let senha = document.querySelector('#loginsenha')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text');
    }else{
        senha.setAttribute('type', 'password');
    }
})