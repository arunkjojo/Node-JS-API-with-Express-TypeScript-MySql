"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use(express_1.default.json());
app.get('/orders/:id', (req, res) => {
    db_1.pool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            console.log('entered into error');
            res.send({
                success: false,
                statusCode: 500,
                message: 'Getting error during the connection'
            });
            return;
        }
        console.log("the Id : " + req.params.id);
        conn.query("SELECT * FROM `orders` WHERE id=?", [req.params.id], (err, rows) => {
            if (err) {
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
        });
    });
});
app.post('/Id/:id/Name/:name', (req, res) => {
    res.send({
        data: req.body,
        params: {
            id: req.params.id,
            name: req.params.name
        }
    });
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
