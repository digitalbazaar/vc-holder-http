/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import assert from 'assert-plus';
import {
  createDiscloseCryptosuite as createEcdsaSd2023DiscloseCryptosuite
} from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import express from 'express';
import jsigs from 'jsonld-signatures';
import {loader} from '../documentLoader.js';

const {purposes: {AssertionProofPurpose}} = jsigs;
const documentLoader = loader.build();

export const router = express.Router();

router.post('/derive', async (req, res) => {
  const {selectivePointers, verifiableCredential} = req.body;
  assert.optionalArrayOfString(selectivePointers, 'selectivePointers');
  assert.object(verifiableCredential, 'verifiableCredential');
  const cryptosuite = createEcdsaSd2023DiscloseCryptosuite({selectivePointers});
  const suite = new DataIntegrityProof({cryptosuite});
  const revealed = await jsigs.derive(verifiableCredential, {
    suite,
    purpose: new AssertionProofPurpose(),
    documentLoader
  });
  res.send({revealed});
});
