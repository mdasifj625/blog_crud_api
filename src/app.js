import './core/globals.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morganLogger from 'morgan';

import { AppRoutes } from './app.routes.js';

export class Application {
	#app;
	constructor() {
		this.#app = express();
		this.#middleware();
		this.#config();
		// this.#registerResponders();
		this.#registerRoutes();
	}

	// Returns Express App
	express() {
		return this.#app;
	}

	// Configuration and Setup
	#config() {
		this.#app.set('port', App.Config.PORT || 9000);
		this.#app.set('env', App.Config.ENVIRONMENT || 'development');
		this.#app.disable('x-powered-by');
	}

	// Http(s) request middleware
	#middleware() {
		if (App.Config.ENVIRONMENT === 'development') {
			this.#app.use(
				morganLogger('dev', {
					stream: {
						write: (message) => Logger.info(message.slice(0, -1)),
					},
				})
			);
		}
		this.#app.use(cors());
		this.#app.use(helmet());
		this.#app.use(express.json());
		this.#app.use(express.urlencoded({ extended: true }));
	}

	// Register Responders Dynamically
	// async #registerResponders() {
	// 	this.app.use(async (_request, response, next) => {
	// 		await _registerResponders(response);
	// 		next();
	// 	});
	// }

	// Register Routes
	#registerRoutes() {
		this.#app.get('/', (_req, res) => {
			return res.success({ message: 'Welcome' });
		});

		this.#app.use('/api/v1', AppRoutes);

		// Handle the 404 errors
		this.#app.use('*', (_req, res) => {
			// return res.notFound();
		});
	}

	// Do things after the server starts
	onServerStart() {
		Logger.info(
			`App is running on PORT ${this.#app.get('port')} in ${
				App.Config.ENVIRONMENT
			} mode.`
		);
		Logger.info('Press CTRL-C to stop');
	}
}

export default new Application();
