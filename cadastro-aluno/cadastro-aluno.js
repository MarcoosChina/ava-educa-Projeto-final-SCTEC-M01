import { Aluno } from "../js/aluno.js";
import { cadastrarAluno } from "../js/alunos.js";

const stringUsuario = JSON.parse(sessionStorage.getItem("usuario"));
console.log("Usuario logado", stringUsuario);

document.getElementById("nomeUsuario").textContent = stringUsuario.nome;

document.getElementById("sair").addEventListener("click", function () {
    sessionStorage.removeItem("usuario");
    window.location.href = "../login/login.html";
});

const form = document.getElementById("formCadastroAluno");
const campoCep = document.getElementById("cep");

campoCep.addEventListener("blur", function () {
    const cep = campoCep.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
            document.getElementById("logradouro").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
        })
        .catch((erro) => {
            console.error("Erro ao consultar o CEP:", erro);
            alert("Erro ao consultar o CEP.");
        });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const genero = document.getElementById("genero").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const logradouro = document.getElementById("logradouro").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;

    const data = moment(dataNascimento, "YYYY-MM-DD", true);
    const dataMinima = moment("1900-01-01", "YYYY-MM-DD");
    const dataAtual = moment();

    if (
        !data.isValid() ||
        !data.isAfter(dataMinima) ||
        !data.isBefore(dataAtual)
    ) {
        alert("A data de nascimento deve ser válida, posterior a 01/01/1900 e anterior à data atual.");
        return;
    }

    const aluno = new Aluno(
        null,
        nomeCompleto,
        genero,
        data.format("YYYY-MM-DD"),
        cpf,
        telefone,
        email,
        cep,
        cidade,
        estado,
        logradouro,
        numero,
        complemento,
        bairro
    );

    cadastrarAluno(aluno)
        .then((mensagem) => {
            alert(mensagem);
            form.reset();
        })
        .catch((erro) => {
            alert(erro.message);
        });
});