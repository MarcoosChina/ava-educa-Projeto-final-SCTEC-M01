import { listarCursos } from "../js/cursos.js";
// Recupera o usuário logado do sessionStorage
const stringUsuario = JSON.parse(sessionStorage.getItem("usuario"));
console.log("Usuario logado", stringUsuario);
//insere o nome do usuário logado no elemento HTML com id 'nomeUsuario'
document.getElementById("nomeUsuario").textContent = stringUsuario.nome;

//RF03 - logica para o botao de sair do dashboard remover o usuario do sessionStorage e redirecionar para a tela de login
document.getElementById("sair").addEventListener("click", function () {
  sessionStorage.removeItem("usuario");
  window.location.href = "../login/login.html";
});
// RF04 - recupera e exibe os cursos do usuário logado

listarCursos(stringUsuario)
  .then((cursos) => {
    const dashboard = document.getElementById("dashboard");

    cursos.forEach((curso) => {
      const card = document.createElement("div");
      // Adiciona a classe "card-curso" ao elemento card
      card.classList.add("card-curso");

      card.innerHTML = `
                <h2>${curso.nomeCurso}</h2>
                <p>Data de início: ${curso.dataInicio}</p>
                <p>Data de fim: ${curso.dataFim}</p>
            `;

      dashboard.appendChild(card);
    });
  })
  .catch((erro) => {
    console.error(erro.message);
  });
