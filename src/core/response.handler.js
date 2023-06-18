import * as fs from 'fs'
import _ from 'lodash'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const _registerResponders = async (response) => {
  try {
    const responseDirectoryPath = resolve(`${__dirname}/../responses`)
    const responses = fs.readdirSync(responseDirectoryPath)
    for (let responseFileName of responses) {
      let responseFunctionName = responseFileName.split('.')[0]
      responseFunctionName = responseFunctionName
        ? _.camelCase(responseFunctionName)
        : null
      // eslint-disable-next-line

      const targetFunction = await import(
        pathToFileURL(resolve(`${responseDirectoryPath}/${responseFileName}`))
      )
      if (typeof targetFunction.default === 'function') {
        response[responseFunctionName] = targetFunction.default
      }
    }
  } catch (error) {
    Logger.error(error)
  }
}
