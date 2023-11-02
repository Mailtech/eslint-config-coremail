// noinspection JSUnusedGlobalSymbols

import {configs} from './config/index.js';

export default [configs.es, {
    files : ['test/samples/**'],
    rules : {
        // disable debatable rules
        'semi'   : 'off',
        'quotes' : 'off',
        // sample test codes have many unused / undeclared symbols
        'no-undef'              : 'off',
        'no-unused-vars'        : 'off',
        'no-unreachable'        : 'off',
        'no-constant-condition' : 'off',
        'no-use-before-define'  : 'off',
    },
}, {
    files : ['test/samples/es3/**'],
    ...configs.legacy,
}];
