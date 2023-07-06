import { configsUser } from "../Reducers/UsuarioReducer";

export type ActionType = {
    type: string,
    payload: {
        [key:string]: any
    }
};

export type initStateType = {
    usuario: configsUser;
};

export type ContextType = {
    state: initStateType;
    dispatch: React.Dispatch<ActionType>;
}