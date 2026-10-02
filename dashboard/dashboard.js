const stringUsuario = JSON.parse(sessionStorage.getItem('usuario'));
console.log('Usuario logado',stringUsuario);

document.getElementById('nomeUsuario').textContent = stringUsuario.nome;