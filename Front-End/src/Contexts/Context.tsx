import { PropsWithChildren, createContext, useReducer } from "react";
import { initConfigsUser, UsuarioReducer } from "../Reducers/UsuarioReducer";
import { ActionType, initStateType, ContextType } from "../Types/StateGlobalTypes";

const initState: initStateType = {
    usuario: initConfigsUser,
};

export const MyContext = createContext<ContextType>({
    state: initState,
    dispatch: () => null,
});

const MainReducer = (state: initStateType, action: ActionType) => {
    return {
        usuario: UsuarioReducer(state.usuario, action),
    }
};


const ContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(MainReducer, initState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider;