/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoUserRepository')} obj.UserRepository
*/
export default ({PersonsRepository}) => {
	return async () => {
		return PersonsRepository.getAll();
	};
};
