import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/', (req, res) => {
    res.send({
        data: req.body
    });
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})