/**
 * Copyright (c) 2023 Coremail.cn, Ltd. All Rights Reserved.
 */

import {createRequire} from 'module';

export const error = 'error', off = 'off', first = 'first', never = 'never';

// try using 'globals' defined in the project first, it can be different between one required by eslint itself
export const globals = (require => {
    // projectDir (../../..)
    //  +- node_modules (../..)
    //      +- eslint
    //      +- globals
    //      +- eslint-config-email (..)
    //          +- config (this location)
    try {
        // noinspection JSFileReferences
        return require('../../../node_modules/globals');
    } catch {
        return require('globals');
    }
})(createRequire(import.meta.url));

// merge configuration objects or env into one
export function use(...envs) {
    const result = {};
    envs.forEach(x => Object.entries((typeof x === 'string') ? {globals : globals[x]} : x).forEach(([key, val]) => {
        switch (key) {
        case 'languageOptions':
            const {globals, ...remains} = val;
            result[key] = {...result[key], ...remains};
            return addGlobals(result, globals);

        case 'globals':
            return addGlobals(result, val);

        case 'rules':
            return (result[key] = mergeRules(result[key], val));

        case 'linterOptions':
        case 'plugins':
        case 'settings':
            return (result[key] = {...result[key], ...val});
        }
        result[key] = val;
    }));
    return result;
}

function addGlobals(x, globals) {
    const languageOptions = x.languageOptions = (x.languageOptions || {});
    languageOptions.globals = {...x.languageOptions.globals, ...globals};
}


// ref https://eslint.org/docs/latest/use/configure/configuration-files-new#rule-configuration-cascade
// cascaded rules only override severity if passing in a simple value
export function mergeRules(...rules) {
    const result = {};
    rules.forEach(rules => Object.entries(rules || {}).forEach(([ruleId, def]) => {
        if (Array.isArray(result[ruleId])) {
            if (typeof def === 'string') {
                return (result[ruleId][0] = def);
            } else if (def?.length === 1 && typeof def?.[0] === 'string') {
                return (result[ruleId][0] = def[0]);
            }
        }
        result[ruleId] = def;
    }));
    return result;
}
