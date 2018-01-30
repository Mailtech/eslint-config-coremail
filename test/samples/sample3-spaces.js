//

// noinspection NpmUsedModulesInstalled
import {Component} from 'react'

// noinspection JSUnusedLocalSymbols
function foo(_x, y, z) {
    // noinspection JSUnresolvedFunction, JSUnresolvedVariable
    bar(1, b);
    var i = 0;
    // noinspection JSUnusedLocalSymbols, JSDuplicatedDeclaration
    var x = {0 : "zero", 1 : "one"};
    var a = [0, 1, 2];
    // noinspection JSUnusedLocalSymbols, UnterminatedStatementJS
    var foo = function () {}
    if (!i > 10) {
        // noinspection JSDuplicatedDeclaration
        for (let j = 0; j < 10; j++) {
            switch (j) {
            case 0:
                // noinspection JSUndeclaredVariable
                value = "zero";
                break;
            case 1:
                // noinspection JSUndeclaredVariable
                value = "one";
                break;
            }
            // noinspection JSUnusedLocalSymbols
            var c = j > 5 ? "GT 5" : "LE 5";
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

