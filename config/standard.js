

extends: [standard]


parserOptions:
    ecmaVersion: 2018


rules:
    no-var                          : [error]
    no-tabs                         : [error]
    indent                          :
                                    - error
                                    - 4
                                    - SwitchCase          : 0
                                      VariableDeclarator  : { var : 1, let : 1, const : 1 }
                                      ImportDeclaration   : first
                                      ArrayExpression     : first
                                      ObjectExpression    : first
                                      FunctionDeclaration : {parameters: first}
                                      FunctionExpression  : {parameters: first}
                                      CallExpression      : {arguments: 1}
                                      MemberExpression    : off
                                      ignoreComments      : true
    semi                            : [off, never]
    quotes                          : [error, single, avoid-escape]
    arrow-parens                    : [error, as-needed]
    operator-linebreak              : [error, before]           # corrected now, ternary operator should has nothing special
    comma-dangle                    : [error, always-multiline] # more friendly to VCS system / manual code arrangements
    padded-blocks                   : [off]                     # extra space in blocks should not be a problem
    prefer-const                    : [off]
    yoda                            : [off]
    no-new                          : [off]
    default-case                    : [off]
    one-var                         : [off]
    space-before-function-paren     : [error, {named: never, anonymous: ignore, asyncArrow: always}]
    space-before-blocks             : [error]
    no-multiple-empty-lines         : [off]
    no-multi-spaces                 :
                                    - error
                                    - exceptions: {VariableDeclarator: true, ImportDeclaration: true}
                                      ignoreEOLComments: true
    keyword-spacing                 : [error]
    key-spacing                     : [off]
    comma-spacing                   : [error]
    space-infix-ops                 : [error]
    spaced-comment                  : [error]
    eol-last                        : [error]
