/**
 * Copyright (c) 2024 Coremail.cn, Ltd. All Rights Reserved.
 */

import {baseRules, plugins, styleRules} from './imported.js';
import {error, first, mergeRules, never, off} from './util.js';

export default {
    languageOptions : {
        ecmaVersion   : 'latest',
        parserOptions : {ecmaFeatures : {jsx : true}},
    },

    plugins,
    rules : mergeRules(baseRules, styleRules, { /* eslint-disable @stylistic/indent */// @formatter:off
        'no-var'                                     : [error],
        '@stylistic/no-tabs'                         : [error],
        '@stylistic/indent'                          : [error, 4, {
                                                           SwitchCase          : 0,
                                                           VariableDeclarator  : {var : 1, let : 1, const : 1},
                                                           ImportDeclaration   : first,
                                                           ArrayExpression     : first,
                                                           ObjectExpression    : first,
                                                           FunctionDeclaration : {parameters: first},
                                                           FunctionExpression  : {parameters: first},
                                                           CallExpression      : {arguments: 1},
                                                           MemberExpression    : off,
                                                           ignoreComments      : true,
                                                           ignoredNodes        : styleRules['@stylistic/indent'][2].ignoredNodes,
                                                       }],
        '@stylistic/semi'                            : [off],
        '@stylistic/quotes'                          : [error, 'single', 'avoid-escape'],
        '@stylistic/arrow-parens'                    : [error, 'as-needed'],
        '@stylistic/operator-linebreak'              : [error, 'before'], // ternary operator should have nothing special
        '@stylistic/multiline-ternary'               : [off],
        '@stylistic/comma-dangle'                    : [error, { // more friendly to VCS system / manual code arrangements
                                                           arrays    : 'always-multiline',
                                                           objects   : 'always-multiline',
                                                           imports   : 'always-multiline',
                                                           exports   : 'always-multiline',
                                                           functions : 'only-multiline',
                                                       }],
        '@stylistic/padded-blocks'                   : [off], // extra space in blocks should not be a problem
        'prefer-const'                               : [off],
        'yoda'                                       : [off],
        'no-new'                                     : [off],
        'no-void'                                    : [off],
        'no-case-declarations'                       : [off],
        'no-inner-declarations'                      : [off],
        'default-case'                               : [off],
        'one-var'                                    : [off],
        'dot-notation'                               : [off],
        '@stylistic/quote-props'                     : [off],
        '@stylistic/object-curly-spacing'            : [off],
        '@stylistic/space-before-function-paren'     : [error, {named: 'never', anonymous: 'ignore', asyncArrow: 'always'}],
        '@stylistic/generator-star-spacing'          : [error, 'after'],
        '@stylistic/yield-star-spacing'              : [error, 'after'],
        '@stylistic/no-multiple-empty-lines'         : [off],
        '@stylistic/no-multi-spaces'                 : [error, {
                                                           exceptions: {VariableDeclarator: true, ImportDeclaration: true},
                                                           ignoreEOLComments: true,
                                                       }],
        '@stylistic/key-spacing'                     : [off],
        'camelcase'                                  : [error, {
                                                           properties          : never,
                                                           ignoreDestructuring : true,
                                                           ignoreGlobals       : true,
                                                       }],

        'array-callback-return'                      : [off],
        'no-empty'                                   : [off],
        'no-restricted-globals'                      : [error, {
                                                           name    : 'event',
                                                           message : 'Use local parameter instead.',
                                                       }],

        'n/no-path-concat'                           : [off],
        'n/no-exports-assign'                        : [off],

        'import/no-webpack-loader-syntax'            : [off],
    }),
};
