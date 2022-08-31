let idPizza = 0

const c = (el)=>document.querySelector(el);
const cAll = (el)=>document.querySelectorAll(el);

pizzasJson.map((item, index)=>{
    let pizzaItem = c('.modeloGeral .modelo li').cloneNode(true);

    pizzaItem.querySelector('.item').setAttribute('data-key', index);
    pizzaItem.querySelector('span').innerHTML = item.sabor;
    pizzaItem.querySelector('img').src = item.img;;
    pizzaItem.querySelector('button').addEventListener('click', (e)=>{
        let key = e.target.closest('.item').getAttribute('data-key');
        qtdPizzas = 1;
        idPizza = key;

        c('.pizzaInfo .pizza img').src = pizzasJson[key].img;
        c('.pizzaInfo .pizza Span').innerHTML = pizzasJson[key].sabor;
        c('.subContainer .descricao p').innerHTML = pizzasJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = 'R$' + pizzasJson[key].valor.toFixed(2);
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cAll('.pizzaInfo--size').forEach((size, sizeindex)=>{
            if(sizeindex == 2){
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzasJson[key].tamanhos[sizeindex];
        })
        c('.pizzaInfo--qt').innerHTML = qtdPizzas;

        c('.pizzaInfo').style.opacity = 0;
        c('.pizzaInfo').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaInfo').style.opacity = 1;
        }, 200);
    })

    c('.areaPizza ul').append(pizzaItem);
})

let qtdPizzas = 1;
let valorPizza = pizzasJson[idPizza].valor;
let valorTot = 0;

function maisMenos(soma){
    
    if(soma == 'mais'){
        qtdPizzas += 1
    }else if(soma == 'menos' && qtdPizzas > 1){
        qtdPizzas -= 1 
    }
    valorTot = qtdPizzas * valorPizza
    c('.pizzaInfo--qt').innerHTML = qtdPizzas;
    c('.pizzaInfo--actualPrice').innerHTML = 'R$' + valorTot.toFixed(2);
}
let idtamanho = 0
cAll('.pizzaInfo--size').forEach((size, sizeindex)=>{
    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
        idtamanho = sizeindex
    })
})
function fechar(){
    c('.pizzaInfo').setAttribute('style', 'display:none');
}

/*Carrinho*/

cart = JSON.parse(localStorage.getItem('cart') || '[]')
function adicionar(){
    cart.push({
        sabor: pizzasJson[idPizza].sabor,
        tamanho: idtamanho,
        quantidade: qtdPizzas,
        valor: valorTot,
        imagem: pizzasJson[idPizza].img
    })
    localStorage.setItem('cart', JSON.stringify(cart))
}
