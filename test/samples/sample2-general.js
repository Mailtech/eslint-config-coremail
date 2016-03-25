//

var foo = function foo() {};
var object = {};
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
var myLink  = {
        img   : "btn.gif",
        text  : "Button",
        width : 128,
    },
    local   = true,
    initial = -1;
// noinspection JSUnusedGlobalSymbols
var selector = "#id";

// noinspection JSUnusedGlobalSymbols
var color = "red";
// noinspection JSUnusedGlobalSymbols
var offset = 10;

// noinspection JSUnresolvedVariable
varName = val;



