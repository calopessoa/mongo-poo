import 'express-async-errors';
import express from 'express';
import globalError from './helpers/globalError';
import router from './routes/routes';

const app = express();
app.use(express.json());

app.use('/cars', router);

app.use(globalError);

export default app;
