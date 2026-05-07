/**
 * Copyright (c) 2026 Coremail.cn, Ltd. All Rights Reserved.
 */

import {use} from './util.js';
import {browser, node} from './compactGlobals.js';
import es from './standard.js';
import es3 from './legacy.js';

export {globals, use, mergeRules} from './util.js';
export const configs = Object.freeze({
    es,
    es3,
    node     : use(es, {globals : node}),
    browser  : use(es, {globals : browser}),
    standard : use(es, {globals : {...browser, ...node}}),
    legacy   : use(es3, {globals : {...browser, JSON : 'readonly'}}),
});
