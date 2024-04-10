/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as credentialsV2Context from '@digitalbazaar/credentials-v2-context';
import dataIntegrityContext from '@digitalbazaar/data-integrity-context';
import multikeyCtx from '@digitalbazaar/multikey-context';
import {securityLoader} from '@digitalbazaar/security-document-loader';

export const loader = securityLoader();

const addContext = ({url, contexts}) =>
  loader.addStatic(url, contexts.get(url));

addContext({
  url: dataIntegrityContext.constants.CONTEXT_URL,
  contexts: dataIntegrityContext.contexts
});
addContext({
  url: credentialsV2Context.constants.CONTEXT_URL,
  contexts: credentialsV2Context.contexts
});

loader.addStatic(multikeyCtx.constants.CONTEXT_URL, multikeyCtx.CONTEXT);
