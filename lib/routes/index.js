/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import express from 'express';

export const router = express.Router();

router.post('/derive', (req, res) => {
  const {
    selectivePointers,
    signedCredential
  } = req.body;
  res.send();
});
