import { Database } from './database.js'

export default async (app) => {
  // eslint-disable-line
  try {
    // Do stuff that needs to be done before server start
    // #1 connect database
    await connectDatabase()
  } catch (error) {
    Logger.error(error)
    throw error
  }
}

// Connect Database
async function connectDatabase() {
  try {
    const database = new Database({
      url: App.Config.DB_CONNECTION_STRING,
      connectionOptions: App.Config.DB_CONNECTION_OPTIONS,
    })
    await database.connect()
  } catch (err) {
    throw err
  }
}
