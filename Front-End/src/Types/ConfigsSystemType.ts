import { configsUser } from "../Reducers/UsuarioReducer";

export type ActionType = {
    type: string,
    payload: {
        [key:string]: any
    }
};

export type ReducersType = {
    usuario: configsUser;
};

export type ContextType = {
    state: ReducersType;
    dispatch: React.Dispatch<ActionType>;
}