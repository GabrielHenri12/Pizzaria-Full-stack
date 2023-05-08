# API de Gerenciamento de Produtos

Esta API é responsável por gerenciar produtos, carrinhos e usuários.

## Rotas

### Produtos

- Consultar todos os produtos: `GET /produtos`
- Consultar produto por ID: `GET /produto/:id/`

### Carrinho

Para acessar as rotas relacionadas ao carrinho, é necessário estar autenticado.

- Consultar todos os carrinhos: `GET /carrinho/`
- Adicionar um produto ao carrinho: `POST /carrinho/adicionar/`
- Excluir um carrinho: `DELETE /carrinho/excluir/:id`

### Usuários

- Cadastrar usuário: `POST /cadastrar/`
        - campos obrigatorios: "NOME", "SOBRENOME", "EMAIL", "SENHA" e "IDADE"
        - campos opcionais: "CPF", "TELEFONE" e "CREDENCIAL"
- Autenticar usuário: `POST /entrar/`
        - Quando autenticado com sucesso é gerado um token do usuário

## Autenticação

Algumas rotas exigem autenticação. Para isso, é necessário enviar o token JWT gerado durante o processo de login no header da requisição, no seguinte formato:

`Authorization: Bearer <token>`
