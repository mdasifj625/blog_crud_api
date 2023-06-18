import { Config } from './config.js'
import { Logger } from './logger.js'
import { isEmail } from '../utils/common.js'

import { Messages } from './constants/response.messages.js'

// Database Models
import { UserModel } from '../model/user.js'
import { PostModel } from '../model/post.js'

// Export Global Variables
export const Global = global
Global.Logger = Logger
Global.App = {
  Config,
  Messages,
  Models: {
    User: UserModel,
    Post: PostModel,
  },
  Utils: { isEmail },
}
