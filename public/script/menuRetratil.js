function abrirFechar(){
    let menu = document.querySelector('.menu_retratil');
    let btnAbrir = document.querySelector('.btnAbrir');
    let btnFechar = document.querySelector('.btnFechar');

    if(menu.classList.contains('menu_aberto') == true){
        menu.classList.remove('menu_aberto');
        btnAbrir.classList.remove('esconder');
        btnFechar.classList.add('esconder');
    }else{
        menu.classList.add('menu_aberto');
        btnAbrir.classList.add('esconder');
        btnFechar.classList.remove('esconder');
    }
}

