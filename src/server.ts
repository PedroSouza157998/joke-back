const port = 3333;
import './database/connection';
import express from 'express';
import routes from './routes/route';
const app = express();

app.use(express.json());
app.use(routes)


app.listen(port);
console.log('server running in port ', port);