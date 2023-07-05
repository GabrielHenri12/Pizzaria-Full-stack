import api from "../services/Api";

export const busqueTodosProdutos = async (): Promise<any> => {
    const response = await api.get('produtos');
    return response;
}