/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as credentialsV2Context from '@digitalbazaar/credentials-v2-context';
import dataIntegrityContext from '@digitalbazaar/data-integrity-context';
import multikeyCtx from '@digitalbazaar/multikey-context';
import {securityLoader} from '@digitalbazaar/security-document-loader';

export const loader = securityLoader();

const addContexts = contexts => {
  for(const [url, context] of contexts) {
    loader.addStatic(url, context);
  }
};

addContexts(dataIntegrityContext.contexts);
addContexts(credentialsV2Context.contexts);

loader.addStatic(multikeyCtx.constants.CONTEXT_URL, multikeyCtx.CONTEXT);
