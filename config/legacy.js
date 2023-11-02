/**
 * Copyright (c) 2023 Coremail.cn, Ltd. All Rights Reserved.
 */

import {error} from './util.js';

export default {

    languageOptions : {
        ecmaVersion   : 3,
        sourceType    : 'script',
        parserOptions : {allowReserved : true},
    },

    rules : {
        /* eslint-disable indent *//* @formatter:off */

        // here two rules are only for ES3 compliant / IE6 supports
        'quote-props'                   : [error, 'as-needed', {
                                                keywords    : true,
                                                unnecessary : false,
                                          }],
        'dot-notation'                  : [error, {
                                                allowKeywords : false,
                                                allowPattern  : '.*',
                                          }],
        'comma-dangle'                  : [error, 'never'],
        // ES3 compliant END
        'no-tabs'                       : [error],
    },
};
