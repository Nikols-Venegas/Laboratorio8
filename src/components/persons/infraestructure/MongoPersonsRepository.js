import MongoLib from '../../../lib/mongo'

class MongoPersonsRepository { // implement an interface
  constructor () {
    this.collection = 'persons'
    this.mongoDB = new MongoLib()
  }

  async add (person) {
    const id = await this.mongoDB.create(this.collection, person)
    return { id, ...person }
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

}

export default MongoPersonsRepository