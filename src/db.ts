import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'productsDB',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
