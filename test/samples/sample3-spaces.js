//

// noinspection ES6UnusedImports
import {Component} from 'react'

// noinspection JSUnusedLocalSymbols
function foo(_x, y, z) {
    // noinspection JSUnresolvedFunction, JSUnresolvedVariable
    bar(1, b);
    let i = 0;
    // noinspection JSUnusedLocalSymbols, JSDuplicatedDeclaration
    let x = {0 : "zero", 1 : "one"};
    let a = [0, 1, 2];
    // noinspection JSUnusedLocalSymbols, UnterminatedStatementJS
    let foo = function () {}
    if (!i > 10) {
        // noinspection JSDuplicatedDeclaration
        for (let j = 0; j < 10; j++) {
            switch (j) {
            case 0:
                // noinspection JSUndeclaredVariable, JSUnresolvedReference
                value = "zero";
                break;
            case 1:
                // noinspection JSUndeclaredVariable, JSUnresolvedReference
                value = "one";
                break;
            }
            // noinspection JSUnusedLocalSymbols
            let c = j > 5 ? "GT 5" : "LE 5";
        }
    } else {
        let j = 0;
        try {
            while (j < 10) {
                if (i === j || j > 5) {
                    a[j] = i + j * 12;
                }
                i = (j << 2) & 4;
                j++;
            }
            do {
                j--;
            } while (j > 0)
        } catch (e) {
            alert("Failure: " + e.message);
        } finally {
            // noinspection JSUnresolvedFunction
            reset(a, i);
        }
    }
}

