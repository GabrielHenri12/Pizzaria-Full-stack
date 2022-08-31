const c = (el)=>document.querySelector(el);
const cAll = (el)=>document.querySelectorAll(el);

let cartItens = JSON.parse(localStorage.getItem('cart'))

cartItens.map((item, indexitem)=>{
    let itemModelo = c('.modeloCart li').cloneNode(true);

    itemModelo.querySelector('img').src = item.imagem;
    itemModelo.querySelector('span').innerHTML = item.sabor
    itemModelo.querySelector('.quantidade').innerHTML = item.quantidade
    itemModelo.querySelector('.valor').innerHTML = 'R$'+item.valor.toFixed(2);


    c('#carrinhoCart').append(itemModelo);
})

function limpar(){
    localStorage.setItem('cart', JSON.stringify([]));
    cartItens = [];
    location.reload();
};
