//import { UsuarioServicos } from '../Services/UsuarioServicos';
//import { UsuarioType } from '../Types/UsuarioTypes';
//import { UsuarioRepositorioMock } from '../mocks/UsuarioMock.mock';

//describe('UsuarioServico', () => {
// let usuarioRepositorioMock = new UsuarioRepositorioMock();

//  const novoUsuario = () => {
//    const usuario: UsuarioType = {
//      NOME: 'João',
//      SOBRENOME: 'Silva',
//      CPF: '12345678901',
//      IDADE: 25,
//      EMAIL: 'joao.silva@example.com',
//      SENHA: 'senha123',
//      CREDENCIAL: 'usuario',
//      TELEFONE: '1234567890',
//      ID: 0,
//      TOKEN: ''
//    };
//    return usuario;
//  };

//  test('Deve adiciona usuário corretamente', async () => {
//    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
//    const usuario: UsuarioType = novoUsuario();

//    const Resultado = await usuarioServico.Registrar(usuario);

//    expect(Resultado.isResultado()).toBeTruthy();
//  });
//
//  test('Deve recusar usuário com mesmo email', async () => {
//    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
//
//    await usuarioServico.Registrar(novoUsuario());
//    const Resultado = await usuarioServico.Registrar(novoUsuario());
//
//    expect(Resultado.isResultado()).toBeFalsy();
//    expect(Resultado.isErro()).toBeTruthy();
//    expect(Resultado.isErro()? 
//          Resultado.valor.message : null)
//          .toBe("Email já cadastrado");
//  });
//
//  test('Deve fazer login com sucesso', async () => {
//    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
//
//    const usuario = novoUsuario();
//    await usuarioServico.Registrar(novoUsuario());
//    const Resultado = await usuarioServico.Logar(usuario.EMAIL, usuario.SENHA);
//
//    expect(Resultado.isResultado()).toBeTruthy();
//  });
//
//  test('Deve recusar login com senha errada', async () => {
//    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
//
//    const usuario = novoUsuario();
//    await usuarioServico.Registrar(novoUsuario());
//    const Resultado = await usuarioServico.Logar(usuario.EMAIL, "45872");
//
//    expect(Resultado.isErro()).toBeTruthy();
//    expect(Resultado.isErro()? Resultado.valor.message : null).not.toBeNull();
//  });
//
//  test('Deve recusar login com email errado', async () => {
//    const usuarioServico = new UsuarioServicos(usuarioRepositorioMock)
//
//    const usuario = novoUsuario();
//    await usuarioServico.Registrar(novoUsuario());
//    const Resultado = await usuarioServico.Logar("Teste@123.com", usuario.SENHA);
//
//    expect(Resultado.isErro()).toBeTruthy();
//    expect(Resultado.isErro()? Resultado.valor.message : null).not.toBeNull();
//  });
//});
