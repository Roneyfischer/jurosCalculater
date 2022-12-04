import Pool from "pg-pool";
import * as dotenv from "dotenv";

async function dbConnect() {
  try {
    console.log("> [dbConnect] initializing DB connection");
    const pool = new Pool({
      connectionString: `postgress://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    const client = await pool.connect();
    console.log("> [dbConnect] Connection established. Pool has been created!");

    return client;
  } catch (error) {
    console.log(error);
  }
}
export default dbConnect;
