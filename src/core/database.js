import { connect } from 'mongoose'

export class Database {
  #url
  #connectionOptions

  constructor({
    url = 'mongodb://localhost:27017/test',
    connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }) {
    this.url = url
    this.connectionOptions = connectionOptions
  }

  async connect() {
    const mongoose = await connect(this.url.toString(), this.connectionOptions)
    Logger.info('Database Connected Successfully.', mongoose)
  }
}
