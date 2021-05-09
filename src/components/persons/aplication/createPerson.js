/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoUserRepository')} obj.UserRepository
*/
export default ({PersonsRepository}) => {
	return async ({name, number}) => {
		const newperson = {
			name: name,
			number: number
		};
		return PersonsRepository.add(newperson);
	};
};

