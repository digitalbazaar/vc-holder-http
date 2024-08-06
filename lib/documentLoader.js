/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {contexts as diContexts} from '@digitalbazaar/data-integrity-context';
import {contexts as multikeyContexts} from '@digitalbazaar/multikey-context';
import {securityLoader} from '@digitalbazaar/security-document-loader';

export const loader = securityLoader();

loader.addDocuments({documents: [
  ...diContexts,
  ...multikeyContexts
]});
