import { usuarios } from "../dados/listagem-usuarios.js";

//exportar essa função!
export function login(usuario, senha) {
    return new Promise((resolve, reject) => {
        const usuarioEncontrado = usuarios.find(
            (item) => item.email === usuario && item.senha === senha
        );
        if (usuarioEncontrado){
            resolve (usuarioEncontrado);
        }
        else{
            reject(new Error("Credenciais inválidas"));
        }

    })
}