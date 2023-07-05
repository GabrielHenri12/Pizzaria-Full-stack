export type ProdutoType = {
    id: number,
    nome: string,
    tipo: string,
    descricao: string,
    img: string,
    precos: PrecoType[]
};

export type PrecoType = {
    id: number,
    valor: number,
    tamanho: string
}