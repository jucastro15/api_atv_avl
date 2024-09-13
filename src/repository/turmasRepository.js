import con from './controllers.js';


export async function adicionarTurma(turma){
    let comando = `insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
    value(?,?,?,?,?,?);`


    let [info] = await con.query(comando, [turma.turma, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao]);


    let msg = info.insertId;
    return msg;

}

export async function selecionarTurma(){
    let comando = `SELECT
    id_turma,         id,
    nm_turma,         nome,
    ds_curso,         curso,
    nr_ano_letivo,    ano_letivo,
    qtd_capacidade,   capacidade,
    bt_ativo,         ativo,
    dt_inclusao       data_inclusao
    FROM tb_turma;`

    let [info] = await con.query(comando)

    let msg = info.insertId;
    return msg;

}


export async function mudarTurma(turma, id){
    let comando = `
    UPDATE tb_turma
    SET 
    nm_turma = ?,
    ds_curso = ?,      
    nr_ano_letivo = ?,   
    qtd_capacidade = ?,  
    bt_ativo = ?,     
    dt_inclusao = ?     
    WHERE id_turma = ?;`


    let [info] = await con.query(comando, [turma.turma, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao, id]);


    let resultado = info.affectedRows;
    return resultado;

}

export async function removerTurma(id){
    let comando = `DELETE FROM tb_turma
    WHERE id_turma = ?;`


    let [info] = await con.query(comando[id])


    
    let resultado = info.affectedRows;
    return resultado

}


























