import { ActionType } from "../Types/StateGlobalTypes";

export type configsUser = {
    token: string,
    nome: string
}

export const initConfigsUser: configsUser = {
    token: "",
    nome: ""
};

export const UsuarioReducer = (state: configsUser, action: ActionType) => {
    switch (action.type) {
        case "Login":
            return { ...state, token: action.payload.token }
    }
    return state;
}