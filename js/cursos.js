//irá receber o usuario e ver quais cursos pertencem a ele
import { cursos } from "../dados/listagem-cursos.js";

export function listarCursos(usuario) {
    return new Promise((resolve, reject) => {
        // Filtra os cursos pelo email do professor
        const cursosDoUsuario = cursos.filter(
            (curso) => curso.emailProfessor === usuario.email
        );
        // Verifica se encontrou algum curso para o usuário
        if (cursosDoUsuario.length > 0) {
            resolve(cursosDoUsuario);
        // Caso contrário, rejeita a promessa com uma mensagem de erro
        } else {
            reject(new Error("Não há cursos cadastrados para esse usuário"));
        }
    });
}
