/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express, { response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) =>
    response.json({ message: 'Hello GoStack' }),
);

app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
