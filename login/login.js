import { login } from "../js/auth.js";
const form = document.querySelector('#formLogin');

//adiciona um evento de submit ao formulário
//quando o formulário for enviado, a função será executada
form.addEventListener('submit', function (event) {
    //isso é para evitar que a página seja recarregada ao enviar o formulário
    event.preventDefault();
    //pega os valores dos inputs de email e senha
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    //utilizar o .then e o .catch
    login (email, senha)
    .then((usuario) => {
        console.log('Usuário logado:', usuario);
    })
    .catch((error) => {
        console.error('Erro no login:', error);
    })

}
)
