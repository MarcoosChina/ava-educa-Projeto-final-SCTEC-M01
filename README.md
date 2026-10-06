# AVA-EDUCA+

Sistema desenvolvido como projeto avaliativo do Módulo 01.

## Sobre o projeto

O AVA-EDUCA+ é um protótipo de sistema desenvolvido para auxiliar profissionais da área pedagógica no acompanhamento de informações acadêmicas.

A aplicação reúne informações relacionadas a usuários, cursos e alunos em uma interface única, permitindo realizar autenticação, visualizar cursos e cadastrar alunos.

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript, aplicando conceitos de manipulação do DOM, eventos, armazenamento de dados, consumo de API, responsividade, orientação a objetos e módulos JavaScript.

## Objetivo

O objetivo do AVA-EDUCA+ é centralizar informações acadêmicas e facilitar o acompanhamento de cursos e alunos pelo corpo pedagógico.

## Funcionalidades

### Autenticação

- Login com e-mail e senha.
- Validação das credenciais.
- Armazenamento do usuário logado utilizando `sessionStorage`.
- Redirecionamento para o Dashboard após o login.
- Opção de sair da aplicação removendo o usuário da sessão.

### Dashboard

- Exibição dos cursos relacionados ao usuário logado.
- Apresentação dos cursos em formato de cards.
- Exibição do nome do curso.
- Exibição das datas de início e fim do curso.

### Cadastro de alunos

- Formulário para cadastro de alunos.
- Validação dos campos obrigatórios.
- Validação da data de nascimento utilizando Moment.js.
- Consulta de endereço através da API ViaCEP.
- Preenchimento automático de cidade, estado, logradouro e bairro através do CEP.
- Criação do aluno utilizando a classe `Aluno`.
- Cadastro do aluno através da função `cadastrarAluno`.
- Feedback visual após o cadastro.

### Responsividade

A aplicação possui layout responsivo para diferentes tamanhos de tela, utilizando CSS e media queries.

O sistema foi adaptado para utilização em telas desktop e dispositivos móveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Moment.js
- API ViaCEP
- Git
- GitHub

## Estrutura do projeto

```text
ava-educa-Projeto-final-SCTEC-M01/
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
├── index.html
├── README.md
├── KANBAN.md
└── package.json