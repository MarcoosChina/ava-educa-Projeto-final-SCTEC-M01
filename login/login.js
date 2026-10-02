import { login } from "../js/auth.js";
const form = document.querySelector('#formLogin');
const esqueceuSenha = document.querySelector('#esqueceuSenha');

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
        const mensagemErro = document.querySelector('#mensagemErro');
        mensagemErro.textContent = '';
        mensagemErro.style.color = '';
        console.log('Usuário logado:', usuario);
        //pega o objeto usuario e transforma numa string para armazenar no sessionStorage
        //e depois muda a localização da pagina para o dashboard
        const stringUsuario = JSON.stringify(usuario);
        sessionStorage.setItem('usuario', stringUsuario);
        window.location.href = '../dashboard/dashboard.html';
    })
    .catch((error) => {
        const mensagemErro = document.querySelector('#mensagemErro');
        mensagemErro.textContent = error.message;
        mensagemErro.style.color = 'red';
        console.error('Erro no login:', error);
    })

}
)
esqueceuSenha.addEventListener('click', function(){
    alert('Deseja recuperar sua senha? entre em contato com o suporte técnico do AVA-EDUCA+');
})
