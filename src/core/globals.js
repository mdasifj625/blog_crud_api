import { Config } from './config.js';
import { Logger } from './logger.js';

import { Messages } from './constants/response.messages.js';

// Database Models
// import { UserModel } from '../model/user.model.js';
// import { RoleModel } from '../model/role.model.js';

// Export Global Variables
export const Global = global;
Global.Logger = Logger;
Global.App = {
	Config,
	Messages,
	// Models: {
	// 	User: UserModel,
	// 	Role: RoleModel,
	// },
};
