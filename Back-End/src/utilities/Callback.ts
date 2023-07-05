
export type Callback<E, R> = ErroClass<E, R> | ResultadoClass<E, R>;

export class ErroClass<E, R>{
    value: E;
    constructor(value: E) {
        this.value = value;
    };

    isErro(): this is ErroClass<E, R> {
        return true;
    };
    isResultado(): this is ResultadoClass<E, R> {
        return false;
    };
}

export class ResultadoClass<E, R>{
    value: R;
    constructor(value: R) {
        this.value = value;
    };

    isErro(): this is ErroClass<E, R> {
        return false;
    };
    isResultado(): this is ResultadoClass<E, R> {
        return true;
    };
}

export const Erro = <E, R>(erro: E): Callback<E, R> => {
    return new ErroClass(erro);
}

export const Resultado = <E, R>(resultado: R): Callback<E, R> => {
    return new ResultadoClass(resultado);
}