const port = 3333;
import './database/connection';
import express from 'express';
import routes from './routes/route';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port);
console.log('server running in port ', port);