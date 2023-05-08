export interface IRepositorio<T> {

    Adicionar (dados: T):Promise<void>

    Consulte (): Promise<T[]>

    ConsulteParcial (valor: string): Promise<T | null>

    ConsultePorID (ID: number): Promise<T | null>

    Editar (dados: T): Promise<void>

    Deletar (ID: number): Promise<void>
}