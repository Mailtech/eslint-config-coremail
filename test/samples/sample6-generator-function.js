/*
 * Copyright (c) 2024 Coremail.cn, Ltd. All Rights Reserved.
 */

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

const anonymous = function* (i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

// noinspection JSUnusedGlobalSymbols
const object = {
    anonymous,
    normal : function* () {},
    * shorthand() {},
};
