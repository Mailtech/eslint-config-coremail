//

const A = 'a',
      B = 'b',
      C = 'c';

// noinspection UnnecessaryLocalVariableJS
let varA = A,
    varB = B,
    varC = C;

// noinspection UnnecessaryLocalVariableJS
let letA = varA,
    letB = varB,
    letC = varC;

switch (varA) {
case letA:
    break;
case letB:
    break;
case letC:
    break
}

// Test for option: {assignmentOperator}
// noinspection JSUnusedLocalSymbols
const {foo, bar, baz, longValue, ...remains}
              = {};

// For https://github.com/eslint-stylistic/eslint-stylistic/issues/1208
// noinspection JSUnusedGlobalSymbols
export const // @formatter:of
    CONST_1    = 1,
    CONST_2    = 2,
    CONST_3    = 3,
    CONST_LAST = null; // @formatter:on
