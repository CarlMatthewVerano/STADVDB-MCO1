import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const pool = mysql.createPool(
    {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
).promise()

export async function getDoctors() {
    // returns an array of objects
    const [rows] = await pool.query("SELECT * FROM doctors")
    return rows
}

export async function getDoctor(doctor_id) {
    // returns an array of objects
    const [rows] = await pool.query(`
    SELECT *
    FROM doctors
    WHERE doctor_id = "${doctor_id}"
    `)
    return rows
}

const doctors = await getDoctors("1A10A64C1788D23B40B30BF9736B4F57")
// gets a single row from the table
console.log(doctors)