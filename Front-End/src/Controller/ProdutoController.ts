import api from "../services/Api";

export const busqueTodosProdutos = async (): Promise<any> => {
    const response = await api.get('produtos');
    return response;
}

export const addItemNoCarrinho = async (id: number): Promise<any> => {
    const response = await api.post('', {id});
    return response;
}