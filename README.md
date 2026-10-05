# AVA-EDUCA+

Sistema web desenvolvido como projeto avaliativo do módulo de Front-End, utilizando HTML, CSS e JavaScript.

## Objetivo

O AVA-EDUCA+ tem como objetivo centralizar informações acadêmicas para facilitar o acompanhamento de cursos e alunos pelo corpo pedagógico.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Moment.js
- API ViaCEP
- Git e GitHub
- Trello/Kanban

## Requisitos Funcionais

- [x] **RF01 – Index e Login**
  - Redirecionamento do `index.html` para o login.
  - Formulário de e-mail e senha.
  - Validação de login.
  - Armazenamento do usuário no `sessionStorage`.
  - Redirecionamento para o Dashboard.
  - Link de recuperação de senha com aviso de funcionalidade em construção.

- [x] **RF02 – Cabeçalho**
  - Nome do sistema AVA-EDUCA+.
  - Exibição do nome do usuário logado.
  - Presente nas páginas internas.

- [x] **RF03 – Menu Lateral**
  - Acesso ao Dashboard.
  - Opção Cursos desabilitada.
  - Acesso ao Cadastro de Alunos.
  - Botão Sair removendo o usuário do `sessionStorage`.

- [x] **RF04 – Dashboard**
  - Exibição dos cursos do usuário logado.
  - Cards com nome do curso.
  - Data de início.
  - Data de fim.
  - Utilização da função `listarCursos(usuario)`.

- [x] **RF05 – Cadastro de aluno**
  - Formulário de cadastro.
  - Validação dos campos obrigatórios.
  - Validação da data de nascimento com Moment.js.
  - Consulta de CEP pela API ViaCEP.
  - Preenchimento automático dos dados de endereço.
  - Criação do objeto `Aluno`.
  - Cadastro através da função `cadastrarAluno(aluno)`.
  - Feedback de sucesso ou erro.

- [x] **RF06 – Aluno**
  - Função `cadastrarAluno(aluno)`.
  - Geração de identificador para o aluno.
  - Inserção no array de alunos.
  - Promise de sucesso com a mensagem `Aluno cadastrado com sucesso!`.
  - Promise de erro com a mensagem `Erro ao cadastrar o aluno`.

- [x] **RF07 – Cursos**
  - Função `listarCursos(usuario)`.
  - Validação dos cursos cadastrados para o usuário.
  - Retorno dos cursos encontrados.
  - Tratamento para usuário sem cursos cadastrados.

- [x] **RF08 – Autenticação**
  - Função `login(usuario, senha)`.
  - Validação do e-mail e senha utilizando a listagem de usuários.
  - Promise de sucesso com os dados do usuário.
  - Promise de erro com a mensagem definida no requisito.

- [x] **RF09 – Responsividade**
  - Layout adaptado para desktop.
  - Layout adaptado para dispositivos móveis.
  - Uso de media queries.
  - Uso de CSS Grid e Flexbox.
  - Testes no modo responsivo do DevTools.

- [x] **RF10 – Kanban**
  - Quadro Kanban utilizado para acompanhar o desenvolvimento.
  - Organização das atividades em etapas de planejamento, desenvolvimento e conclusão.
  - Colunas utilizadas: TO DO, DOING e DONE.

- [x] **RF11 – Criar uma classe**
  - Classe `Aluno` criada em `js/Aluno.js`.
  - Propriedades do aluno definidas na classe.
  - `constructor` utilizado para inicializar as propriedades.

- [x] **RF12 – Utilizar módulo**
  - Utilização de `export` e `import`.
  - Funções organizadas em módulos.
  - Classe `Aluno` organizada em módulo.
  - Listagens organizadas em módulos.
  - `package.json` configurado com `"type": "module"`.

## Estrutura do projeto

```text
ava-educa/
├── login/
│   ├── login.html
│   ├── login.js
│   └── login.css
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── dashboard.css
├── cadastro-aluno/
│   ├── cadastro-aluno.html
│   ├── cadastro-aluno.js
│   └── cadastro-aluno.css
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── cursos.js
│   ├── Aluno.js
│   └── alunos.js
├── dados/
│   ├── listagem-usuarios.js
│   ├── listagem-cursos.js
│   └── listagem-alunos.js
├── assets/
│   ├── images/
│   └── icons/
├── index.html
├── README.md
└── package.json
```

## Como executar

1. Clone o repositório.
2. Abra a pasta do projeto.
3. Execute o projeto utilizando um servidor local.
4. Acesse o `index.html`.
5. Faça login com um usuário presente na listagem de usuários.
6. Utilize o Dashboard e o Cadastro de Alunos.

## Versionamento

O projeto foi desenvolvido utilizando Git e GitHub, com a seguinte organização:

- `main`: versão final do projeto.
- `develop`: branch utilizada para concentrar as funcionalidades.
- `feature/*`: branches utilizadas para desenvolvimento de cada requisito.

As funcionalidades foram desenvolvidas em branches próprias e integradas por Pull Requests.

## Kanban

O desenvolvimento foi acompanhado através de um quadro Kanban, permitindo organizar as tarefas e acompanhar o andamento de cada requisito.

## Checklist final

- [x] RF01 – Index e Login
- [x] RF02 – Cabeçalho
- [x] RF03 – Menu Lateral
- [x] RF04 – Dashboard
- [x] RF05 – Cadastro de aluno
- [x] RF06 – Aluno
- [x] RF07 – Cursos
- [x] RF08 – Autenticação
- [x] RF09 – Responsividade
- [x] RF10 – Kanban
- [x] RF11 – Criar uma classe
- [x] RF12 – Utilizar módulo
- [x] README.md
- [x] Versionamento com Git/GitHub
- [x] Branches e Pull Requests
- [ ] Vídeo de apresentação
- [ ] Links finais de entrega
