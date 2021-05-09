import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import Personsrouter from './routes/persons';
import errorHandler from './utils/middlewares/errorHandler';
import notFoundHandler from './utils/middlewares/notFoundHandlers';

const app = express();
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.use('/', Personsrouter);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`El servidor esta corriendo en el puerto:${PORT}`);
});
