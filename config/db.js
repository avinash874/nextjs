import mysql from "mysql2/promise";


// for the sigle connection create
// mysql.createconnection()

// For multiple connection create reusable connection
 const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Avinash#2004",
    database: "hospital_db",
});

try {
const connection = await db.getConnection();
console.log("Database connection successfully.")
connection.release();
} catch(err){
    console.error("Database connection failed:", err);
    process.exist(1);
}

export default db;
