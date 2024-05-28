import { Client } from 'pg';

// Async function to insert data into a table
const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/postgres'
});

const createUserTable = async () => {
    await client.connect(); // Ensure client connection is established
    const result = await client.query(`CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`)

    console.log(result);

}
createUserTable();