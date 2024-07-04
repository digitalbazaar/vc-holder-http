/*!
 * Copyright (c) 2024 Digital Bazaar, Inc.
 */
import * as bbs2023 from '@digitalbazaar/bbs-2023-cryptosuite';
import * as ecdsaSd2023 from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';

// map "proof.cryptosuite" to library
const suites = {
  'ecdsa-sd-2023': ecdsaSd2023,
  'bbs-2023': bbs2023
};

/**
 * Takes in a suiteName and selectivePointers and returns a
 * DataIntegrityProof with a dislosure cryptosuite.
 *
 * @param {object} options - Options to use.
 * @param {string} options.suiteName - A cryptosuite name.
 * @param {Array<string>} options.selectivePointers - An Array
 * of json pointers for the disclosed VC.
 *
 * @returns {DataIntegrityProof} - A proof.
 */
export function createDiscloseProof({suiteName, selectivePointers}) {
  const cryptosuite = suites[suiteName];
  return new DataIntegrityProof({
    cryptosuite: cryptosuite.createDiscloseCryptosuite({selectivePointers})
  });
}
