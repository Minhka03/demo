import express from 'express';
import getProduct from '../controller/getProduct';

const router = express.Router();

const product = (app) => {
    router.get('/', getProduct);
    return app.use('/product', router);
}

export default product