import { UsuarioType } from "../Types/UsuarioTypes";
import { IRepositorio } from "../Repository/IRepositorio";
import bcrypt from "bcryptjs";

export class UsuarioRepositorioMock implements IRepositorio<UsuarioType> {
  private usuarios: UsuarioType[] = [];

  public async Adicionar(UsuarioDados: UsuarioType): Promise<void> {
    UsuarioDados.SENHA = bcrypt.hashSync(UsuarioDados.SENHA, 10);
    this.usuarios.push(UsuarioDados);
    return Promise.resolve();
  }

  public async Consulte(): Promise<UsuarioType[]> {
    return Promise.resolve(this.usuarios);
  }

  public async ConsulteParcial(valor: string): Promise<UsuarioType | null> {
    const usuario = this.usuarios.find(
      (usuario) => usuario.EMAIL === valor
    );
    return Promise.resolve(usuario || null);
  }

  public async ConsultePorID(id: number): Promise<UsuarioType | null> {
    const usuario = this.usuarios.find(
      (usuario) => usuario.ID === id
    );
    return Promise.resolve(usuario || null);
  }

  Editar(dados: UsuarioType): Promise<void> {
    throw new Error("Method not implemented.");
  }
  Deletar(ID: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
