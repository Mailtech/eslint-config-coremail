/**
 * Copyright (c) 2023 Coremail.cn, Ltd. All Rights Reserved.
 */

const error = 'error', off = 'off', first = 'first', never = 'never';

module.exports = {

    extends       : ['standard'],
    parserOptions : { ecmaVersion : 2024 },

    /* eslint-disable indent */// @formatter:off
    rules : {
        'no-var'                        : [error],
        'no-tabs'                       : [error],
        'indent'                        : [error, 4, {
                                                SwitchCase          : 0,
                                                VariableDeclarator  : { var : 1, let : 1, const : 1 },
                                                ImportDeclaration   : first,
                                                ArrayExpression     : first,
                                                ObjectExpression    : first,
                                                FunctionDeclaration : {parameters: first},
                                                FunctionExpression  : {parameters: first},
                                                CallExpression      : {arguments: 1},
                                                MemberExpression    : off,
                                                ignoreComments      : true,
                                          }],
        'semi'                          : [off, never],
        'quotes'                        : [error, 'single', 'avoid-escape'],
        'arrow-parens'                  : [error, 'as-needed'],
        'operator-linebreak'            : [error, 'before'], // corrected now, ternary operator should have nothing special
        'comma-dangle'                  : [error, { // more friendly to VCS system / manual code arrangements
                                                arrays    : 'always-multiline',
                                                objects   : 'always-multiline',
                                                imports   : 'always-multiline',
                                                exports   : 'always-multiline',
                                                functions : 'only-multiline',
                                          }],
        'padded-blocks'                 : [off], // extra space in blocks should not be a problem
        'prefer-const'                  : [off],
        'yoda'                          : [off],
        'no-new'                        : [off],
        'no-void'                       : [off],
        'no-case-declarations'          : [off],
        'no-inner-declarations'         : [off],
        'default-case'                  : [off],
        'one-var'                       : [off],
        'dot-notation'                  : [off],
        'quote-props'                   : [off],
        'object-curly-spacing'          : [off],
        'space-before-function-paren'   : [error, {named: never, anonymous: 'ignore', asyncArrow: 'always'}],
        'space-before-blocks'           : [error],
        'no-multiple-empty-lines'       : [off],
        'no-multi-spaces'               : [error, {
                                                exceptions: {VariableDeclarator: true, ImportDeclaration: true},
                                                ignoreEOLComments: true,
                                          }],
        'keyword-spacing'               : [error],
        'key-spacing'                   : [off],
        'comma-spacing'                 : [error],
        'space-infix-ops'               : [error],
        'spaced-comment'                : [error],
        'eol-last'                      : [error],
        'camelcase'                     : [error, {
                                                properties          : never,
                                                ignoreDestructuring : true,
                                                ignoreGlobals       : true,
                                          }],
        'multiline-ternary'             : [off],
        'array-callback-return'         : [off],
        'no-empty'                      : [off],
        'n/no-path-concat'              : [off],
        'n/no-exports-assign'           : [off],
    },
};
