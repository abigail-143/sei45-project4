import { Pool } from "pg";

export const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: "localhost",
    port: 5432,
    database: 'manageme',
    max: 10,
})