/*!
 * Copyright (c) 2024 Digital Bazaar, Inc.
 */
import * as vc from '@digitalbazaar/vc';
import assert from 'assert-plus';
import {
  createDiscloseCryptosuite as createEcdsaSd2023DiscloseCryptosuite
} from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {loader} from '../documentLoader.js';

const documentLoader = loader.build();

export async function deriveHandler(req, res) {
  const {options: {selectivePointers}, verifiableCredential} = req.body;
  assert.optionalArrayOfString(selectivePointers, 'selectivePointers');
  assert.object(verifiableCredential, 'verifiableCredential');
  const cryptosuite = createEcdsaSd2023DiscloseCryptosuite({selectivePointers});
  const suite = new DataIntegrityProof({cryptosuite});
  const derivedVC = await vc.derive({
    verifiableCredential,
    suite,
    documentLoader
  });
  res.send({verifiableCredential: derivedVC});
}
