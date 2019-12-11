/**
 * Copyright (c) 2020 Coremail.cn, Ltd. All Rights Reserved.
 */

const error = 'error';

module.exports = {

    parserOptions : {
        ecmaVersion : 3,
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
