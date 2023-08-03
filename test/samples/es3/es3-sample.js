//

console.log([
    1,
    2,
    'never comma-dangle'
], {
    'var' : 'keyword must be quoted',
    KKKKK : keywords({'long'  : long(), 'final' : final()}),
    last  : 'never comma-dangle'
});

function keywords(x, long, final) {
    return console.log(x['long'], x['final'], long, final);
}

function long() {
}

function final() {
}
