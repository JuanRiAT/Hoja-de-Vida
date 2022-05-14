import sql from 'mssql'
import config from './Config'

const dbSettings = {
    user: config.username,
    password: config.password,
    host: config.host,
    database: config.database
}

/*async function getConnection(){
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query("SELECT 1");
    console.log(result);
}
*/

export const getConnection = async () =>{
    
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.log(error);
    } 
};

export {sql};