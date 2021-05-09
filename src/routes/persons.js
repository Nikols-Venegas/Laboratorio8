import express from 'express';
import MongoDB from '../lib/mongo';
import {getPersons, newPerson} from '../components/persons/infraestructure/controller';
import {createPersonSchema} from '../components/persons/domain/persons';
import {validationHandler} from '../utils/middlewares/validationHandler';
const mongo = new MongoDB();
const router = express.Router();

router.get('/', (request, response) => {
	response.send('<h1>Hola mundo</h1>');
});

router.get('/api/persons', getPersons);

router.post('/api/persons', validationHandler(createPersonSchema), newPerson);

export default router;
