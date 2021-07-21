const port = 3333;
import './database/connection'
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    console.log(req.body)
})

app.listen(port);
console.log('server running in port ', port);