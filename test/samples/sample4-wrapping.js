//

// noinspection NpmUsedModulesInstalled
import {
        Component,
        property1,
        property2,
        property3,
} from 'react'

// noinspection JSUnusedLocalSymbols
function buzz() { return 0; }

// noinspection JSUnusedGlobalSymbols, JSCommentMatchesSignature
var foo = {

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
    fOne    : function (a, b, c, d, e, f, g, h) {
        // noinspection JSUnusedLocalSymbols
        var x = a
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
        var z = a
                == 'Some string' ? 'yes' : 'no';
        // noinspection JSUnusedAssignment
        z = a == 10 ? 'yes' : 'no';
        var colors = ['red', 'green', 'blue', 'black', 'white', 'gray'];
        // noinspection JSUndeclaredVariable
        for (j = 0; j < 2; j++) i = a;
        // noinspection JSUnusedLocalSymbols
        for (var i = 0; i
                        < colors.length; i++)
            var colorString = this.numbers[i];
    },

    chainedCallSample : function (a, b, c, d, e, f) {
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction, ES6ModulesDependencies, JSValidateTypes
        chainRoot.firstCall(a, b, c, d, e, f, g).secondCall(a, b, c, d).thirdCall(a, b, c, d).fourthCall().q(a).r(a, b).s();
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction, ES6ModulesDependencies, JSValidateTypes
        chainRoot.x().y()
                .z();
    },

    /**
     * Function JSDoc. Long lines can be wrapped with 'Comments'/'Wrap at right margin' option
     * @param {string} a Parameter A description.
     * @param {string} b Parameter B description. Can extend beyond the right margin.
     */
    fTwo : function (a, b, c, d) {
        // noinspection JSUnresolvedFunction
        foo(a, b, c, d); // Line comment which can be wrapped if long.
        // noinspection ConstantIfStatementJS
        if (true) {
            return c;
        }
        if (a == 'one' && (b
                           == 'two'
                           || c
                              == 'three')) {
            return a + b + c + d;
        } else {
            // noinspection JSUnresolvedVariable
            return strD;
        }
        // noinspection UnreachableCodeJS
        if (a == 'one') {
            return 1;
        }
        else if (a == 'two') {
            return 2;
        }
        var number = -10;
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
        var number = prompt("Enter a number:", 0);
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


/* eslint curly:            "off"       */
/* eslint brace-style:      "off"       */
