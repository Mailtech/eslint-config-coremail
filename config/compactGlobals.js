/**
 * Copyright (c) 2026 Coremail.cn, Ltd. All Rights Reserved.
 */

// Avoid global pollution like `{name, status, ...}`; ref http://git.mailtech.cn/coremail/cmj/-/merge_requests/7863#note_395064

export const readonly = 'readonly', writeable = 'writeable';

export const base = {
    global          : readonly,
    atob            : readonly,
    btoa            : readonly,
    console         : readonly,
    setTimeout      : readonly,
    setInterval     : readonly,
    clearTimeout    : readonly,
    clearInterval   : readonly,
    fetch           : readonly,
    Event           : readonly,
    URL             : readonly,
    URLSearchParams : readonly,
    Blob            : readonly,
    FormData        : readonly,
    TextEncoder     : readonly,
    TextDecoder     : readonly,
};

export const node = Object.assign({
    __dirname  : readonly,
    __filename : readonly,
    module     : readonly,
    require    : readonly,
    process    : readonly,
    exports    : writeable,
    Buffer     : readonly,
}, base);

export const browser = Object.assign({
    self                  : readonly,
    window                : readonly,
    parent                : readonly,
    top                   : readonly,
    document              : readonly,
    navigator             : readonly,
    history               : readonly,
    location              : writeable,
    open                  : readonly,
    close                 : readonly,
    alert                 : readonly,
    confirm               : readonly,
    prompt                : readonly,
    requestAnimationFrame : readonly,
    localStorage          : readonly,
    sessionStorage        : readonly,
    getSelection          : readonly,
    MutationObserver      : readonly,
    Node                  : readonly,
    Element               : readonly,
    Option                : readonly,
    Image                 : readonly,
    DOMParser             : readonly,
    XMLSerializer         : readonly,
    XMLHttpRequest        : readonly,
    FileReader            : readonly,
}, base);
