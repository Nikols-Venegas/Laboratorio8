import MongoPersonsRepository from './MongoPersonsRepository';
import getAllPersons from '../aplication/getAllPersons';
import createPerson from '../aplication/createPerson';
import {request} from 'express';

const PersonsRepository = new MongoPersonsRepository();

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getPersons = async (_, res, next) => {
	try {
		const query = getAllPersons({PersonsRepository});
		const personas = await query();
		res.status(200).json({
			data: personas,
			message: 'Persons listed'
		});
	} catch (e) {
		next(e);
	}
};
export const newPerson = async (req, res) => {
	try {
		const query = createPerson({PersonsRepository});
		const personas = await query(req.body);
		res.status(201).json({
			data: personas,
			message: 'Person created!'
		});
	} catch (e) {
		next(e);
	}
};
