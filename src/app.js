import express from 'express';
import configViewEngine from './configs/viewsEngine';
import bodyParser from 'body-parser';
import product from './routes/product';

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


configViewEngine(app);
product(app);
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})