# Kanban — AVA-EDUCA+

Este documento apresenta o acompanhamento dos requisitos funcionais do projeto AVA-EDUCA+.

## TO DO

Nenhuma tarefa pendente.

## DOING

Nenhuma tarefa em andamento.

## DONE

- [x] **RF01 — Index e Login**
  - Redirecionamento da página inicial para o login.
  - Formulário de login.
  - Validação de usuário e senha.
  - Armazenamento do usuário em `sessionStorage`.

- [x] **RF02 — Cabeçalho**
  - Cabeçalho das páginas internas.
  - Identificação do sistema AVA-EDUCA+.
  - Exibição do usuário logado.

- [x] **RF03 — Menu Lateral**
  - Menu lateral das páginas internas.
  - Acesso ao Dashboard.
  - Acesso ao cadastro de alunos.
  - Opção Cursos desabilitada.
  - Opção Sair.

- [x] **RF04 — Dashboard**
  - Exibição dos cursos do usuário logado.
  - Cards contendo nome do curso.
  - Exibição da data de início.
  - Exibição da data de fim.

- [x] **RF05 — Cadastro de Aluno**
  - Formulário de cadastro.
  - Validação dos campos obrigatórios.
  - Validação da data de nascimento com Moment.js.
  - Consulta de endereço através da API ViaCEP.
  - Preenchimento automático dos dados de endereço.
  - Criação do objeto `Aluno`.
  - Envio do aluno para `cadastrarAluno()`.

- [x] **RF06 — Aluno**
  - Implementação da função `cadastrarAluno(aluno)`.
  - Geração de identificador único.
  - Inclusão do aluno na listagem de alunos.
  - Retorno da mensagem de sucesso.
  - Tratamento de erro no cadastro.

- [x] **RF07 — Cursos**
  - Implementação da função `listarCursos(usuario)`.
  - Filtragem dos cursos pelo usuário.
  - Retorno dos cursos relacionados ao professor.
  - Tratamento de usuário sem cursos cadastrados.

- [x] **RF08 — Autenticação**
  - Implementação da função `login(usuario, senha)`.
  - Validação das credenciais.
  - Retorno do usuário autenticado.
  - Tratamento de dados incorretos.
  - Integração com `sessionStorage`.

- [x] **RF09 — Responsividade**
  - Adaptação das páginas para dispositivos móveis.
  - Adaptação das páginas para desktop.
  - Utilização de media queries.
  - Ajustes de layout para telas de até 768px.

- [x] **RF10 — Kanban**
  - Organização das atividades do projeto.
  - Definição das etapas TO DO, DOING e DONE.
  - Acompanhamento dos requisitos funcionais.

- [x] **RF11 — Criar uma Classe**
  - Criação da classe `Aluno`.
  - Definição das propriedades do aluno.
  - Implementação do construtor.
  - Exportação da classe para utilização em outros módulos.

- [x] **RF12 — Utilizar Módulo**
  - Configuração do projeto para utilização de módulos JavaScript.
  - Utilização de `export` e `import`.
  - Integração entre classes, funções e dados.
  - Configuração do `package.json` com `"type": "module"`.

## Status do projeto

Todos os requisitos funcionais previstos para o projeto foram desenvolvidos e integrados na branch `develop`.

### Fluxo de desenvolvimento

```text
TO DO → DOING → DONE
