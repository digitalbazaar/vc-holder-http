import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import {router} from './routes/index.js';

export const app = express();

// Set security headers
app.use(helmet());
// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

app.use(helmet());

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}.`)
);
