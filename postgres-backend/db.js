// we will connect to the database using the pg library
const Pool = require("pg").Pool

const pool = new Pool({
    user : "postgres",
    password : "Nidhish@123",
    host : "localhost",
    port : "5432",
    database : "perntodo"
})

module.exports = pool