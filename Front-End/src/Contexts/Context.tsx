import { PropsWithChildren, createContext, useReducer } from "react";
import { initConfigsUser } from "../Reducers/UsuarioReducer";
import { ActionType, ReducersType, ContextType } from "../Models/ConfigsSystemType";

const initState: ReducersType = {
    usuario: initConfigsUser,
};

const MyContext = createContext<ContextType>({
    state: initState,
    dispatch: () => { },
});

const MainReducer = (state: ReducersType, action: ActionType) => {
    return {
        usuario: state.usuario,
    };
};

export const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(MainReducer, initState);
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};
