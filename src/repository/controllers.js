import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const con = await  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    typeCast: function(field, next) {   
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1');
        }
        else if (field.type.includes ('decimal')) {
            return Number(field.string());
        }
        else {

            return next();
        }
    }
});

console.log(' ---> Conexão com o banco de dados estabelecida com sucesso!');
export default con