import { Callback, Erro, Resultado } from "../Error/Callback";
import { ErrorCustom } from "../Error/ErrorType";
import { UsuarioType } from "../Models/Usuario";
import api from "../services/Api";


export const UsuarioLogin = async (EMAIL: string, SENHA: string): Promise<Callback<ErrorCustom, string>> => {
    const response = await api.post("entrar", { EMAIL, SENHA });
    if (response.data.status) {
        return Resultado(response.data.data);
    } else {
        return Erro(new ErrorCustom(response.data.Erro, response.data.status));
    }
}

export const UsuarioRegistrar = async (dados: UsuarioType): Promise<Callback<ErrorCustom, boolean>> => {
    const response = await api.post("cadastrar", dados);
    if (response.data.status) {
        return Resultado(response.data.data);
    } else {
        return Erro(new ErrorCustom(response.data.Erro, response.data.status));
    }
}