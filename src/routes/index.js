import express from 'express';
import { models } from '../models/index.js';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
	const data = await models.profiles.findAll({
		include: [
			{
				model: models.projects
				// attributes: ['id', 'name', 'nameKh'],
				// through: { where: { amount: 10 } }
			}
		],
		where: { id: '10' }
	});
	console.log(data);
	res.status(200).json({ message: 'Welcome to Rarebox_dev', data });
});

export default indexRouter;
