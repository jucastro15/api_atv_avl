import con from './controllers.js';


export async function adicionarAluno(aluno) {
    let comando = `insert into tb_matricula_aluno ( nm_aluno , ds_sexo, dt_nascimento, ds_email, bt_ativo, id_turma)
    value(?,?,?,?,?,?);`


    let [info] = await con.query(comando, [aluno.aluno, aluno.curso, aluno.ano_letivo, aluno.capacidade, aluno.ativo, aluno.inclusao]);


    let msg = info.insertId;
    return msg;

}

export async function selecionarAluno() {
    let comando = `SELECT
    id_matricula_aluno,         id,
    nm_aluno,         aluno,
    ds_sexo,          sexo,
    dt_nascimento,    nascimento,
    ds_email,         email,
    bt_ativo,         ativo,
    id_turma          turma
    FROM tb_matricula_aluno;`

    let [info] = await con.query(comando)

    let msg = info.insertId;
    return msg;

}


export async function mudarAluno(aluno, id) {
    let comando = `
    UPDATE tb_matricula_aluno
    SET 
    nm_aluno = ?,
    ds_sexo = ?,      
    dt_nascimento = ?,   
    ds_email = ?,  
    bt_ativo = ?,  
    id_turma = ?
    WHERE id_matricula_aluno = ?;`


    let [info] = await con.query(comando, [aluno.aluno, aluno.curso, aluno.ano_letivo, aluno.capacidade, aluno.ativo, aluno.inclusao, id]);


    let resultado = info.affectedRows;
    return resultado;

}

export async function removerAluno(id) {
    let comando = `
    DELETE FROM tb_matricula_aluno
    WHERE id_matricula_aluno = ?;`


    let [info] = await con.query(comando[id])



    let resultado = info.affectedRows;
    return resultado

}


