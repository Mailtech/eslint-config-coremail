/**
 * Copyright (c) 2024 Coremail.cn, Ltd. All Rights Reserved.
 */

import {error} from './util.js';

export default {
    languageOptions : {
        ecmaVersion   : 3,
        sourceType    : 'script',
        parserOptions : {allowReserved : true},
    },

    plugins : {'@stylistic' : (await import('@stylistic/eslint-plugin')).default},

    // rules only for ES3 compliant / IE6 ~ IE8
    rules : {
        'dot-notation'            : [error, {allowKeywords : false, allowPattern : '.*'}],
        '@stylistic/quote-props'  : [error, 'as-needed', {keywords : true, unnecessary : false}],
        '@stylistic/comma-dangle' : [error, 'never'],
        '@stylistic/no-tabs'      : [error],
    },
};
