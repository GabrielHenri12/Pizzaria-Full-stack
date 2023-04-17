import { CartRepository } from "../Repository/CartRepository";
import { CartType } from "../Types/CartTypes";
import Cart from "../database/models/carrinho";

export const addToCart = async(CartData: CartType, _cartRepository: CartRepository): Promise<Boolean>=>{
    try{
        await _cartRepository.create(CartData);
        return true
    }catch{
        throw new Error("Algo deu erro ao consultar o Banco de Dados")
    }
}

export const FindAll = async(id_user: number, _cartRepository: CartRepository): Promise<Cart[]>=>{

    try{
        const ListCart = await _cartRepository.FindAll(id_user);
        
        if(!ListCart) throw new Error("Lista vazia");
        return ListCart
    }catch{
        throw new Error("Algo deu erro ao consultar o Banco de Dados")
    }
}

export const DeletCart = async(id: number, _cartRepository: CartRepository): Promise<Boolean>=>{
    const cart = await _cartRepository.findByID(id);
    
    if(!cart) throw new Error("Cart não encontrado!");

    try{
        await _cartRepository.deletCart(cart.id);
        return true
    }catch{
        throw new Error("Algo deu erro ao consultar o Banco de Dados")
    }
}