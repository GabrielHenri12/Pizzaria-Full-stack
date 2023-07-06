import { useContext, useState } from "react";
import { UsuarioType } from "../Types/Usuario";
import { MyContext } from "../Contexts/Context";
import api from "../services/Api";
import { useNavigate } from "react-router-dom";

const initUsuario: UsuarioType = {
    ID: 0,
    NOME: "",
    SOBRENOME: "",
    CPF: "",
    CREDENCIAL: "",
    TELEFONE: "",
    IDADE: 0,
    EMAIL: "",
    SENHA: "",
    TOKEN: ""
}

export const UsuarioHook = () => {
    const { dispatch } = useContext(MyContext);
    const [usuario, setUsuario] = useState<UsuarioType>(initUsuario);
    const navigate = useNavigate();

    const handleChangeLogin = async () => {
        const response = await api.post("/entrar", { EMAIL: usuario.EMAIL, SENHA: usuario.SENHA })
        const { status, value } = response.data;

        dispatch({
            type: "Login",
            payload: { token: value }
        })
        if (status) {
            navigate("/");
        }
    }

    const handleChangeRegister = async () => {
        const response = await api.post("/cadastrar", usuario)
        const { status } = response.data;

        if (status) {
            navigate("/usuario");
        }
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setUsuario((usuarioPrev) => ({ ...usuarioPrev, [id]: value }))
    }

    return {
        usuario,
        handleChangeInput,
        handleChangeLogin,
        handleChangeRegister
    }
}