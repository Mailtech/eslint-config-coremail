/**
 * Copyright (c) 2023 Coremail.cn, Ltd. All Rights Reserved.
 */

import {use} from './util.js';
import es from './standard.js';
import es3 from './legacy.js';

export {globals, use, mergeRules} from './util.js';
export const configs = {
    es,
    node     : use(es, 'node'),
    browser  : use(es, 'browser'),
    standard : use(es, 'node', 'browser'),
    legacy   : use(es3, 'builtin', 'browser'),
};
