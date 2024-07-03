/*!
 * Copyright (c) 2023 - 2024 Digital Bazaar, Inc.
 */
import {deriveHandler} from './handler.js';
import express from 'express';

export const router = express.Router();

router.post('/derive', asyncHandler(deriveHandler));
router.post('/credentials/derive', asyncHandler(deriveHandler));

function asyncHandler(middleware) {
  return function asyncMiddleware(...args) {
    const result = middleware(...args);
    const next = args[args.length - 1];
    const handleError = (...args) => process.nextTick(() => next(...args));
    return Promise.resolve(result).catch(handleError);
  };
}
