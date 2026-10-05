import { alunos } from "../dados/listagem-alunos.js";

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject) => {
        try {
            const novoId = alunos.length > 0
                ? Math.max(...alunos.map((aluno) => aluno.id)) + 1
                : 1;

            aluno.id = novoId;
            alunos.push(aluno);

            resolve("Aluno cadastrado com sucesso!");
        } catch (erro) {
            reject(new Error("Erro ao cadastrar o aluno"));
        }
    });
}