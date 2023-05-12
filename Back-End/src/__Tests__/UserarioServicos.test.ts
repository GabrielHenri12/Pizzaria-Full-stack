import { UsuarioServicos } from '../Services/UsuarioServicos';
import { UsuarioType } from '../Types/UsuarioTypes';
import { UsuarioRepositorioMock } from '../mocks/UsuarioMock.mock';

describe('UsuarioServico', () => {
  let usuarioRepositorioMock = new UsuarioRepositorioMock();

  const novoUsuario = ()=>{
    const usuario: UsuarioType = {
      NOME: 'João',
      SOBRENOME: 'Silva',
      CPF: '12345678901',
      IDADE: 25,
      EMAIL: 'joao.silva@example.com',
      SENHA: 'senha123',
      CREDENCIAL: 'usuario',
      TELEFONE: '1234567890',
      ID: 0,
      TOKEN: ''
  };
  return usuario;
  };

  test('Deve adiciona usuário corretamente', async () => {
    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
    const usuario: UsuarioType = novoUsuario();

    const result = await usuarioServico.Registrar(usuario);

    expect(result.success).toBeTruthy();
  });

  test('Deve recusar usuário com mesmo email', async ()=>{
    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
    const usuario: UsuarioType = novoUsuario();

    await usuarioServico.Registrar(usuario);
    const result = await usuarioServico.Registrar(usuario);

    expect(result.success).toBeFalsy();
    expect(result.error).toBe('Email já cadastrado');
  })
});
