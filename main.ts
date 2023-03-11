import type { Express } from 'express';
import express from 'express';
import { routes } from './routes/routes';

const app: Express = express();

const PORT = 3000;

app.use(routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
