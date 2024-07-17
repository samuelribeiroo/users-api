<h3>API com NodeJS (sem frameworks)</h3>

> <p>O repositório contém o código de uma API básica de listagem de usuários que realiza as quatro operações de CRUD, projetada para fins de estudo usando apenas Node.js.</p>
> <p>The repository contains the code for a basic API that allows you to list users and perform basic CRUD operations. It was designed for educational purposes, using only Node.JS without any frameworks.</p>


 <h3>Operações CRUD</h3>

- [ ] POST: Criar Usuário: Um endpoint para criar um novo usuário -> <strong>/users</strong>.
- [ ] GET: Mostrar Usuários: Um endpoint para obter uma lista de todos os usuários -> <strong>/users</strong>.
- [ ] PUT: Editar Usuário: Um endpoint para atualizar os dados do usuário baseado no id informado nos query params -> <strong>/users/:id</strong>.
- [ ] DELETE: Excluir Usuário: Um endpoint para excluir usuário baseado no id informado -> <strong>/users/:id</strong>.

## Para rodar localmente o projeto, siga as instruções abaixo.

Clone o projeto

```bash
  git clone https://github.com/samuelribeiroo/users-api.git
```

Inicialize o repositório 

```bash
  cd users-api
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

