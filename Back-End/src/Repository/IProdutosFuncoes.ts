export interface IProdutosFuncoes<T> {

    Adicionar (dados: T):Promise<void>

    Consulte (): Promise<T[]>

    ConsulteParcial (): Promise<T[]>

    ConsultePorID (ID: number): Promise<T | null>

    Editar (dados: T): Promise<T>

    Deletar (ID: number): Promise<void>
}