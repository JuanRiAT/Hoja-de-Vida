import {config} from 'dotenv'

config();

export default{
    port: process.env.PORT,
    host: process.env.HOST,
    connection: process.env.PROCCES,
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD

}
console.log(process.env.PORT, process.env.HOST, process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, process.env.CONNECTION)