/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import express from 'express';
import {router} from './routes/index.js';

export const app = express();

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}.`)
);
