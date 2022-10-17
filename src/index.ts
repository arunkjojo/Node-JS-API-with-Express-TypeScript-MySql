import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/Id/:id/Name/:name', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World',
        id: req.params.id,
        name: req.params.name
    });
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