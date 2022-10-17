import express, { Application, Request, Response } from 'express';

import { pool } from './db';

const app: Application = express();

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.get('/city/:id', (req: Request, res: Response) => {

    pool.getConnection((err: any, conn: any) => {
        if(err){
            console.log(err)
            console.log('entered into error')
            res.send({
                success: false,
                statusCode: 500,
                message: 'Getting error during the connection'
            })
            return;
        }
        console.log("the Id : "+ req.params.id);

        conn.query("SELECT * FROM `city_api` WHERE id=?", [req.params.id], (err: any, rows: any) => {
            if(err){
                conn.release();
                res.send({
                    success: false,
                    statusCode: 400
                });
            }
            res.send({
                success: true,
                statusCode: 200,
                message: 'Success',
                data: rows
            });

            conn.release();
        })
    })
    
})

app.post('/Id/:id/Name/:name', (req: Request, res: Response) => {
    res.send({
        data: req.body,
        params : {
            id: req.params.id,
            name: req.params.name
        }
    });
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})