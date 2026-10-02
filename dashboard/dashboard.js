// Recupera o usuário logado do sessionStorage
const stringUsuario = JSON.parse(sessionStorage.getItem('usuario'));
console.log('Usuario logado',stringUsuario);
//insere o nome do usuário logado no elemento HTML com id 'nomeUsuario'
document.getElementById('nomeUsuario').textContent = stringUsuario.nome;

//RF03 - logica para o botao de sair do dashboard remover o usuario do sessionStorage e redirecionar para a tela de login
document.getElementById('sair').addEventListener('click', function(){
    sessionStorage.removeItem('usuario');
    window.location.href = '../login/login.html';

})