function _0x3d16() {
    const _0x4b2f56 = ['lastName', 'forEach', 'none', 'purchased', '<div\x20class=\x22cardContent\x22>', 'overflow', 'log', 'notAuthorizedModal', '/therapists', '1131865rVHZcv', 'short', 'numeric', '<div><button\x20class=\x22therapistBtn\x22\x20id=\x22', 'ajax', 'target', '36bduEAX', 'getElementById', 'style', '\x20years\x20of\x20experience\x20in\x20the\x20profession,\x20and\x20offers\x20$', 'therapistName', 'POST', 'block', '\x22\x20alt=\x22Therapist\x201\x22>', 'ready', '</h3>', 'closeCart', 'yearsExperience', 'display', '<h3>', '335712zXThEe', 'data:\x20', 'en-CA', 'profileImg', '<div\x20class=\x22therapistCard\x22\x20id=\x22', '_id', 'body', 'context-menu', 'location', '/addToCart', 'therapistList', '#expireTime', 'window.location=currentURL', 'auto', '536088qLPjlq', 'sessionCost', '39982aYtvYM', 'cartExistModal', '3429360IhYvYA', 'GET', 'Only\x20patients\x20can\x20purchase\x20therapy\x20sessions.', '1012677VLLVUw', '\x22>Purchase\x20Session</button></div>', '<p>', 'cursor', 'hidden', 'text', 'closeAuthorized', '545445FxbeUc', '90sBcHyl', '.therapistBtn', '/activeSession', '</div>', '/isLoggedIn', '15dBjbPq', 'userType', 'closeSession', 'onclick'];
    _0x3d16 = function() {
        return _0x4b2f56;
    };
    return _0x3d16();
}
const _0x1d1c11 = _0x5367;
(function(_0xb68abb, _0x42076f) {
    const _0x43e66f = _0x5367,
        _0x12e872 = _0xb68abb();
    while (!![]) {
        try {
            const _0x54f91a = parseInt(_0x43e66f(0x15d)) / 0x1 * (parseInt(_0x43e66f(0x13f)) / 0x2) + parseInt(_0x43e66f(0x11f)) / 0x3 + parseInt(_0x43e66f(0x15b)) / 0x4 * (-parseInt(_0x43e66f(0x12c)) / 0x5) + -parseInt(_0x43e66f(0x15f)) / 0x6 + -parseInt(_0x43e66f(0x139)) / 0x7 + -parseInt(_0x43e66f(0x14d)) / 0x8 + -parseInt(_0x43e66f(0x126)) / 0x9 * (-parseInt(_0x43e66f(0x127)) / 0xa);
            if (_0x54f91a === _0x42076f) break;
            else _0x12e872['push'](_0x12e872['shift']());
        } catch (_0x356019) {
            _0x12e872['push'](_0x12e872['shift']());
        }
    }
}(_0x3d16, 0x67db3));
const cartExistModal = document['getElementById'](_0x1d1c11(0x15e)),
    therapistExistModal = document['getElementById']('therapySessionExistModal'),
    notAuthorizedModal = document[_0x1d1c11(0x140)](_0x1d1c11(0x137));

function _0x5367(_0x2b9298, _0x446f1f) {
    const _0x3d16c4 = _0x3d16();
    return _0x5367 = function(_0x53673f, _0x5c692f) {
        _0x53673f = _0x53673f - 0x11e;
        let _0x290409 = _0x3d16c4[_0x53673f];
        return _0x290409;
    }, _0x5367(_0x2b9298, _0x446f1f);
}
var currentURL = window[_0x1d1c11(0x155)]['href'];
currentURL != window[_0x1d1c11(0x155)]['origin'] + _0x1d1c11(0x138) && setTimeout(_0x1d1c11(0x159), 0x1f4);
$(document)[_0x1d1c11(0x147)](async function() {
    const _0x18b103 = _0x1d1c11;
    await $['ajax']({
        'url': '/getTherapists',
        'type': _0x18b103(0x160),
        'success': function(_0x4306bc) {
            const _0x8706a2 = _0x18b103;
            console[_0x8706a2(0x136)](_0x8706a2(0x14e), _0x4306bc);
            var _0x527fd7 = 0x1;
            _0x4306bc[_0x8706a2(0x131)](function(_0x4d4df8) {
                const _0x2e243c = _0x8706a2;
                var _0x3c6aba = _0x2e243c(0x151) + _0x527fd7 + '\x22>';
                _0x3c6aba += '<img\x20src=\x22' + _0x4d4df8[_0x2e243c(0x150)] + _0x2e243c(0x146), _0x3c6aba += _0x2e243c(0x134), _0x3c6aba += _0x2e243c(0x14c) + _0x4d4df8['firstName'] + '\x20' + _0x4d4df8[_0x2e243c(0x130)] + _0x2e243c(0x148), _0x3c6aba += _0x2e243c(0x121) + _0x4d4df8[_0x2e243c(0x14a)] + _0x2e243c(0x142) + _0x4d4df8[_0x2e243c(0x15c)] + '\x20per\x20session</p>', _0x3c6aba += _0x2e243c(0x13c) + _0x4d4df8[_0x2e243c(0x152)] + _0x2e243c(0x120), _0x3c6aba += _0x2e243c(0x12a), _0x3c6aba += _0x2e243c(0x12a), document['getElementById'](_0x2e243c(0x157))['innerHTML'] += _0x3c6aba, _0x527fd7++;
            });
        }
    });

    function _0x205c9e(_0x293818) {
        const _0x32eb44 = _0x18b103;
        $['get'](_0x32eb44(0x12b), function(_0x331995) {
            const _0x36db57 = _0x32eb44;
            if (_0x331995[_0x36db57(0x12d)] != 'patient') notAuthorizedModal[_0x36db57(0x141)][_0x36db57(0x14b)] = _0x36db57(0x145), btn['title'] = _0x36db57(0x11e), btn[_0x36db57(0x141)][_0x36db57(0x122)] = _0x36db57(0x154);
            else {
                if (_0x293818 == 'cartExists') cartExistModal[_0x36db57(0x141)][_0x36db57(0x14b)] = _0x36db57(0x145), document['body'][_0x36db57(0x141)][_0x36db57(0x135)] = _0x36db57(0x123);
                else _0x293818 == 'orderExists' ? setTimeout(() => {
                    const _0x4abe1d = _0x36db57;
                    $['get'](_0x4abe1d(0x129), function(_0x552eba) {
                        const _0x2a09b6 = _0x4abe1d;
                        console[_0x2a09b6(0x136)](_0x552eba), $('#therapistName')[_0x2a09b6(0x124)](_0x552eba[_0x2a09b6(0x143)] + '.'), $('#expireDate')[_0x2a09b6(0x124)]('' + new Date(_0x552eba[_0x2a09b6(0x133)])['toLocaleString']('en-CA', {
                            'month': _0x2a09b6(0x13a),
                            'day': _0x2a09b6(0x13b),
                            'year': _0x2a09b6(0x13b)
                        })), $(_0x2a09b6(0x158))[_0x2a09b6(0x124)]('' + new Date(_0x552eba['purchased'])['toLocaleString'](_0x2a09b6(0x14f), {
                            'hour': 'numeric',
                            'minute': _0x2a09b6(0x13b),
                            'hour12': !![]
                        }));
                    }), therapistExistModal[_0x4abe1d(0x141)][_0x4abe1d(0x14b)] = 'block', document[_0x4abe1d(0x153)][_0x4abe1d(0x141)][_0x4abe1d(0x135)] = _0x4abe1d(0x123);
                }, 0x32) : window[_0x36db57(0x155)] = '/checkout';
            }
        });
    }
    const _0x5ba0cc = document['querySelectorAll'](_0x18b103(0x128));
    _0x5ba0cc[_0x18b103(0x131)](function(_0xcbf74b) {
        $(_0xcbf74b)['click'](() => {
            const _0x4ce1e7 = _0x5367;
            $[_0x4ce1e7(0x13d)]({
                'url': _0x4ce1e7(0x156),
                'type': _0x4ce1e7(0x144),
                'data': {
                    'therapist': _0xcbf74b['id']
                },
                'success': _0x205c9e
            });
        });
    });
}), document[_0x1d1c11(0x140)](_0x1d1c11(0x149))[_0x1d1c11(0x12f)] = function() {
    const _0xe46d5f = _0x1d1c11;
    cartExistModal['style'][_0xe46d5f(0x14b)] = _0xe46d5f(0x132), document['body'][_0xe46d5f(0x141)][_0xe46d5f(0x135)] = 'auto';
}, document[_0x1d1c11(0x140)](_0x1d1c11(0x12e))[_0x1d1c11(0x12f)] = function() {
    const _0x317075 = _0x1d1c11;
    therapistExistModal[_0x317075(0x141)]['display'] = _0x317075(0x132), document[_0x317075(0x153)][_0x317075(0x141)][_0x317075(0x135)] = _0x317075(0x15a);
}, document[_0x1d1c11(0x140)](_0x1d1c11(0x125))['onclick'] = function() {
    const _0x38a9c8 = _0x1d1c11;
    notAuthorizedModal[_0x38a9c8(0x141)][_0x38a9c8(0x14b)] = _0x38a9c8(0x132), document[_0x38a9c8(0x153)][_0x38a9c8(0x141)][_0x38a9c8(0x135)] = _0x38a9c8(0x15a);
}, window['onclick'] = function(_0x43c7fe) {
    const _0x40a7fb = _0x1d1c11;
    if (_0x43c7fe[_0x40a7fb(0x13e)] == cartExistModal) cartExistModal['style']['display'] = _0x40a7fb(0x132), document[_0x40a7fb(0x153)]['style'][_0x40a7fb(0x135)] = _0x40a7fb(0x15a);
    else _0x43c7fe[_0x40a7fb(0x13e)] == therapistExistModal && (therapistExistModal[_0x40a7fb(0x141)][_0x40a7fb(0x14b)] = _0x40a7fb(0x132), document[_0x40a7fb(0x153)]['style'][_0x40a7fb(0x135)] = _0x40a7fb(0x15a));
};