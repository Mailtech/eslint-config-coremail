//

// noinspection JSUnresolvedReference, ES6UnusedImports
import {
    Component,
    property1,
    property2,
    property3,
} from 'react'

// noinspection JSUnusedLocalSymbols
function buzz() { return 0; }

// noinspection JSUnusedGlobalSymbols, JSCommentMatchesSignature
let foo = {

    numbers : ['one', 'two', 'three', 'four', 'five', 'six'],
    data    : {
        a : {
            id          : 123,
            type        : "String",
            isAvailable : true,
        },
        b : {id : 456, type : "Int"},
    },
// fBar : function (x,y);
    fOne    : function (a, b, c, d, e,
                        f, g, h, i, j) {
        // noinspection JSUnusedLocalSymbols
        let x = a
                + b
                + c
                + d
                + e
                + f
                + g
                + h;
        // noinspection JSUnresolvedFunction
        fTwo(a, b, c, fThree(d, e, f, g, h));
        // noinspection JSUnusedAssignment
        let z = a
                === 'Some string' ? 'yes' : 'no';
        // noinspection JSUnusedAssignment
        z = a === 10 ? 'yes' : 'no';
        let colors = ['red', 'green', 'blue', 'black', 'white', 'gray'];
        for (j = 0; j < 2; j++) i = a;
        // noinspection JSUnusedLocalSymbols, ES6ConvertVarToLetConst
        for (let i = 0; i
                        < colors.length; i++)
            // eslint-disable-next-line no-var
            var colorString = this.numbers[i];
    },

    chainedCallSample(a, b, c, d,
                      e, f, g, h) {
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction, ES6ModulesDependencies, JSValidateTypes, JSCheckFunctionSignatures
        chainRoot.firstCall(a, b, c, d,
            e, f, g, h).secondCall(a, b, c, d).thirdCall(a, b, c, d).fourthCall().q(a).r(a, b).s();
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction, ES6ModulesDependencies, JSValidateTypes
        chainRoot.x().y()
                .z();

        // noinspection JSUnresolvedVariable, JSUnresolvedFunction, ES6ModulesDependencies, JSValidateTypes
        chainRoot.xxx()
                 .yyy()
                 .zzz();
    },

    /**
     * Function JSDoc. Long lines can be wrapped with 'Comments'/'Wrap at right margin' option
     * @param {string} a Parameter A description.
     * @param {string} b Parameter B description. It can extend beyond the right margin.
     */
    fTwo : function (a, b, c, d) {
        // noinspection JSUnresolvedFunction, JSValidateTypes
        foo(a, b, c, d); // line comment which can be wrapped if long.
        // noinspection ConstantIfStatementJS, PointlessBooleanExpressionJS
        if (true) {
            return c;
        }
        // noinspection UnreachableCodeJS
        if (a === 'one' && (b
                            === 'two'
                            || c
                               === 'three')) {
            return a + b + c + d;
        } else {
            // noinspection JSUnresolvedVariable
            return strD;
        }
        // noinspection UnreachableCodeJS
        if (a === 'one') {
            return 1;
        }
        else if (a === 'two') {
            return 2;
        }
        let number = -10;
        // noinspection JSUnresolvedVariable
        while (x < 0) {
            number = number + 1;
        }
        do {
            number = number + 1;
        } while (number < 10);
        return d;
    },

    fThree : function (strA, strB, strC, strD, strE) {
        // noinspection JSCheckFunctionSignatures
        let number = prompt("Enter a number:", 0);
        switch (number) {
        case 0 :
            alert("Zero");
            break;
        case 1:
            alert("One");
            break;
        }
        try {
            // noinspection JSUnresolvedVariable
            a[2] = 10;
        }
        catch (e) {
            alert("Failure: "
                  + e.message);
        }
        return strA
               + strB
               + strC
               + strD
               + strE;
    },
};

// noinspection NpmUsedModulesInstalled
funDeclare(require('jquery'), 300, 20, 10);

function funDeclare($,
                    mainHeight, HeadHeight, footerHeight) {
    $('#main').height(Math.max(mainHeight - HeadHeight - footerHeight, Math.max(
        $('.MainL').height(),
        $('.MainR').height()
    )));
}

/* eslint curly: off */
/* eslint brace-style: off */
