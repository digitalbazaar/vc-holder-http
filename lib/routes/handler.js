/*!
 * Copyright (c) 2024 Digital Bazaar, Inc.
 */
import * as vc from '@digitalbazaar/vc';
import assert from 'assert-plus';
import {createDiscloseProof} from './helpers.js';
import {loader} from '../documentLoader.js';

const documentLoader = loader.build();

export async function deriveHandler(req, res) {
  const {options: {selectivePointers}, verifiableCredential} = req.body;
  assert.optionalArrayOfString(selectivePointers, 'selectivePointers');
  assert.object(verifiableCredential, 'verifiableCredential');
  assert.object(verifiableCredential.proof, 'verifiableCredential.proof');
  const {cryptosuite} = verifiableCredential.proof;
  const suite = createDiscloseProof({
    suiteName: cryptosuite,
    selectivePointers
  });
  const derivedVC = await vc.derive({
    verifiableCredential,
    suite,
    documentLoader
  });
  res.send({verifiableCredential: derivedVC});
}
