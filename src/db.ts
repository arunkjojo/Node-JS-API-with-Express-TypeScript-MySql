import { createPool } from 'mysql'
export const pool: any = createPool(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test_db',
        connectionLimit: 10,
        multipleStatements: true
    }
);