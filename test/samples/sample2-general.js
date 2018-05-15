//

let foo = function foo() {};
let object = {};
foo(
        'demo',

        /* eslint indent: "off" */
        {
            title : 'Demo',
            width : 100,
        },

        [
            'x',
            'y',
        ],

        function () {
            // noinspection JSUnresolvedFunction
            object.firstCall()
                    .secondCall()
        }
);

// Other
/*
    Multiline
        C-style
            Comment
*/
// noinspection JSUnusedGlobalSymbols
let myLink  = {
        img   : "btn.gif",
        text  : "Button",
        width : 128,
    },
    local   = true,
    initial = -1;
// noinspection JSUnusedGlobalSymbols
let selector = "#id";

// noinspection JSUnusedGlobalSymbols
let color = "red";
// noinspection JSUnusedGlobalSymbols
let offset = 10;

// noinspection JSUnresolvedVariable
varName = val;



