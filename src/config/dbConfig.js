import { DB_PC_NAME,DB_HOST,DB_PORT,DB_PC_PASSWORD,DB_PC_USER} from "./settings.js";


const dbConfig = {
	host     : DB_HOST ,
  port      :  DB_PORT,
  user     : DB_PC_USER,
  password : DB_PC_PASSWORD,
	database: DB_PC_NAME,
};

const dialect = "mysql";
const schema = "public";
export { dialect, schema };
export default dbConfig;


