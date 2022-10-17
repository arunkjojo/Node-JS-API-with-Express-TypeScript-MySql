import express, { Application, Request, Response } from 'express';

const database = require('./config/db')

const app: Application = express();

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.get('/get_cities', (req: Request, res: Response) => {

    var sqlQuery = "SELECT `id`,`name`,`district` FROM `city_api` ORDER BY `city_api`.`name` ASC";
    database.query(sqlQuery, (err: any, data: any) => {
        if(err){
            throw err;
        }
        res.send({
            success: true,
            statusCode: 200,
            message: 'Success',
            data: data
        });

    })
    
})

app.get('/test', (req: Request, res: Response) => {

    res.send({
        success: true,
        statusCode: 200,
        message: 'Success',
        data: {
            name: 'Arun Jojo',
            mobile: "919400247717",
            occupation: "React Developer",
            location: "Kasaragod"
        }
    });
    
})

app.listen(3006, () => {
    console.log('The application is listening on port 3006!');
})