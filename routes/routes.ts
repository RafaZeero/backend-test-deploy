import { Router } from 'express';
import { basicRoute } from '../operations/basic-route';

export const routes: Router = Router();

routes.get('/', basicRoute);
