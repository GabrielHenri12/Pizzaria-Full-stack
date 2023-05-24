export type PedidoType = {
    ID: number;
    QUANTIDADE: number;
    PRECOTOTAL: number;
    Produto: {
        ID: number;
        NOME: string;
        DESCRICAO: string;
        TIPO: string;
        IMG: string;
    };
    Preco: {
        ID: number;
        VALOR: number;
        TAMANHO: {
            NOME: string;
            DESCRICAO: string;
        }
    };
    Usuario: {
        ID: number;
    };
}