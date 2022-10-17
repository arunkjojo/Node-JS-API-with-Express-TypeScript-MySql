"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database = require('./config/db');
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use(express_1.default.json());
app.get('/get_cities', (req, res) => {
    var sqlQuery = "SELECT `id`,`name`,`district` FROM `city_api` ORDER BY `city_api`.`name` ASC";
    database.query(sqlQuery, (err, data) => {
        if (err) {
            throw err;
        }
        res.send({
            success: true,
            statusCode: 200,
            message: 'Success',
            data: data
        });
    });
});
app.get('/test', (req, res) => {
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
});
app.listen(3006, () => {
    console.log('The application is listening on port 3006!');
});
