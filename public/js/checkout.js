var _0x45b07c = _0x3a20;
(function(_0x46a68e, _0x5a75b4) {
    var _0x5d981b = _0x3a20,
        _0x10f244 = _0x46a68e();
    while (!![]) {
        try {
            var _0x557110 = parseInt(_0x5d981b(0x182)) / 0x1 + parseInt(_0x5d981b(0x17c)) / 0x2 + parseInt(_0x5d981b(0x1b7)) / 0x3 * (-parseInt(_0x5d981b(0x1c0)) / 0x4) + -parseInt(_0x5d981b(0x1b6)) / 0x5 + parseInt(_0x5d981b(0x1bf)) / 0x6 * (parseInt(_0x5d981b(0x175)) / 0x7) + -parseInt(_0x5d981b(0x188)) / 0x8 * (parseInt(_0x5d981b(0x19f)) / 0x9) + parseInt(_0x5d981b(0x1a1)) / 0xa * (parseInt(_0x5d981b(0x197)) / 0xb);
            if (_0x557110 === _0x5a75b4) break;
            else _0x10f244['push'](_0x10f244['shift']());
        } catch (_0x36e34a) {
            _0x10f244['push'](_0x10f244['shift']());
        }
    }
}(_0x5b65, 0xa0a48));

function _0x5b65() {
    var _0x2c7f26 = ['focus', 'flex', '<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.googleapis.com\x22><link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.gstatic.com\x22\x20crossorigin><link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\x22\x20rel=\x22stylesheet\x22>', 'PUT', 'checkoutErrorMessage', '#taxTotal', 'display', '#orderNumber', 'cancelRemove', '/thank-you', 'block', 'timeLength', 'new\x20div', '#total', 'GET', 'getElementById', '_id', 'val', '</div><hr\x20/><div\x20id=\x22cartTotalSec\x22>', '5840960hxlhOX', '813819EQbmdz', 'orderId', 'hide', '#cartPlan', 'getMinutes', 'signupSuccessModal', '#subTotal', 'attr', '192hratxY', '12UeANCY', 'setMinutes', 'overflow', '#therapistName', 'sessionCost', '150577EeqPiZ', 'hidden', 'ajax', 'yearPlan', 'onclick', 'errorMsg', 'toFixed', '2619158rFqWWO', 'POST', 'lastName', 'cartTotalSec', '\x20per\x20session', 'removeOrderBtn', '358269eWuqza', '<div\x20id=\x22orderNumSec\x22><h2>Order:\x20<span\x20id=\x22orderNumber\x22>MM0509123456</span></h2></div><div\x20id=\x22orderTable\x22>', '/getTherapistInfo', '<html><head><title>Print\x20Invoice</title>', '\x20years\x20of\x20experience\x20in\x20the\x20profession,\x20and\x20offers\x20$', '#therapistImg', '105496SWbSxn', 'src', 'body', 'monthPlan', '#orderSummary', 'freePlan', '#cartCost', 'style', 'toLocaleTimeString', 'text', 'none', 'height=600,width=600', 'removeOrderModal', 'profileImg', 'html', '12985709sTWnYQ', 'target', 'innerHTML', 'document', '</head><body>\x20<div\x20id=\x22wrapper\x22><div\x20id=\x22orderSummary\x22\x20style=\x22display:\x20block;\x22>', '/checkStatus', '<link\x20rel=\x22stylesheet\x22\x20type=\x22text/css\x22\x20href=\x22../css/style.css\x22\x20/><link\x20rel=\x22stylesheet\x22\x20type=\x22text/css\x22\x20href=\x22../css/checkout.css\x22\x20/><link\x20rel=\x22stylesheet\x22\x20type=\x22text/css\x22\x20href=\x22../css/responsive.css\x22\x20/>', 'threeMonthPlan', '612NSNIqm', 'write', '10dYXtHf', 'change'];
    _0x5b65 = function() {
        return _0x2c7f26;
    };
    return _0x5b65();
}
var therapistInformation, totalPrice;
$(document)['ready'](async function() {
    var _0x2496bb = _0x3a20;
    await $['ajax']({
        'url': _0x2496bb(0x19c),
        'method': _0x2496bb(0x1b1),
        'success': function(_0x4e0b8e) {
            var _0x16cd0c = _0x2496bb;
            _0x4e0b8e && ($(_0x16cd0c(0x1aa))[_0x16cd0c(0x191)]('' + _0x4e0b8e[_0x16cd0c(0x1b8)]), $('#noOrderSummary')[_0x16cd0c(0x1b9)](), $(_0x16cd0c(0x18c))['show'](), getTherapist(_0x4e0b8e['therapist']), $(_0x16cd0c(0x1ba))[_0x16cd0c(0x1b4)]('' + _0x4e0b8e[_0x16cd0c(0x1ae)]), updateCart());
        }
    });
});

function getTherapist(_0x5d0287) {
    var _0x1caa33 = _0x3a20;
    $[_0x1caa33(0x177)]({
        'url': _0x1caa33(0x184),
        'method': _0x1caa33(0x17d),
        'data': {
            'therapistId': _0x5d0287
        },
        'success': function(_0x218563) {
            var _0x464c0c = _0x1caa33;
            $(_0x464c0c(0x173))[_0x464c0c(0x191)](_0x218563['firstName'] + '\x20' + _0x218563[_0x464c0c(0x17e)]), $('#therapistDesc')[_0x464c0c(0x191)](_0x218563['yearsExperience'] + _0x464c0c(0x186) + _0x218563[_0x464c0c(0x174)] + _0x464c0c(0x180)), $(_0x464c0c(0x187))[_0x464c0c(0x1be)](_0x464c0c(0x189), '' + _0x218563[_0x464c0c(0x195)]), therapistInformation = _0x218563, therapistInformation[_0x464c0c(0x1b3)] = _0x5d0287;
            let _0x4788c1;
            if ($(_0x464c0c(0x1ba))[_0x464c0c(0x1b4)]() == 'freePlan') _0x4788c1 = 0x0;
            else {
                if ($(_0x464c0c(0x1ba))['val']() == _0x464c0c(0x18b)) _0x4788c1 = 0x1;
                else $(_0x464c0c(0x1ba))['val']() == _0x464c0c(0x19e) ? _0x4788c1 = 0x3 : _0x4788c1 = 0x6;
            }
            $(_0x464c0c(0x18e))[_0x464c0c(0x196)]('' + parseFloat(therapistInformation[_0x464c0c(0x174)] * _0x4788c1)[_0x464c0c(0x17b)](0x2)), $(_0x464c0c(0x1bd))[_0x464c0c(0x196)]('' + parseFloat(therapistInformation[_0x464c0c(0x174)] * _0x4788c1)['toFixed'](0x2)), $(_0x464c0c(0x1a8))[_0x464c0c(0x196)]('$' + parseFloat(therapistInformation[_0x464c0c(0x174)] * _0x4788c1 * 0.12)[_0x464c0c(0x17b)](0x2)), $(_0x464c0c(0x1b0))[_0x464c0c(0x196)]('$' + parseFloat(therapistInformation['sessionCost'] * _0x4788c1 * 1.12)[_0x464c0c(0x17b)](0x2));
        }
    });
}

function updateCart() {
    var _0x46497d = _0x3a20;
    $(_0x46497d(0x1ba))[_0x46497d(0x1a2)](() => {
        var _0x1cbc3f = _0x46497d;
        $[_0x1cbc3f(0x177)]({
            'url': '/updateCart',
            'type': _0x1cbc3f(0x1a6),
            'data': {
                'timeLength': $(_0x1cbc3f(0x1ba))[_0x1cbc3f(0x1b4)]()
            },
            'success': function() {
                var _0xb0b145 = _0x1cbc3f;
                let _0x16466f;
                if ($(_0xb0b145(0x1ba))['val']() == _0xb0b145(0x18d)) _0x16466f = 0x0;
                else {
                    if ($(_0xb0b145(0x1ba))['val']() == 'monthPlan') _0x16466f = 0x1;
                    else $(_0xb0b145(0x1ba))['val']() == _0xb0b145(0x19e) ? _0x16466f = 0x3 : _0x16466f = 0x6;
                }
                $('#cartCost')[_0xb0b145(0x196)]('' + parseFloat(therapistInformation[_0xb0b145(0x174)] * _0x16466f)['toFixed'](0x2)), $('#subTotal')[_0xb0b145(0x196)]('' + parseFloat(therapistInformation[_0xb0b145(0x174)] * _0x16466f)[_0xb0b145(0x17b)](0x2)), $('#taxTotal')['html']('$' + parseFloat(therapistInformation['sessionCost'] * _0x16466f * 0.12)[_0xb0b145(0x17b)](0x2)), $('#total')['html']('$' + parseFloat(therapistInformation['sessionCost'] * _0x16466f * 1.12)['toFixed'](0x2));
            }
        });
    });
}

function _0x3a20(_0x867187, _0x1e8829) {
    var _0x5b655e = _0x5b65();
    return _0x3a20 = function(_0x3a20ad, _0x37e0c9) {
        _0x3a20ad = _0x3a20ad - 0x172;
        var _0x4a495e = _0x5b655e[_0x3a20ad];
        return _0x4a495e;
    }, _0x3a20(_0x867187, _0x1e8829);
}
var removeOrderModal = document[_0x45b07c(0x1b2)](_0x45b07c(0x194));
document[_0x45b07c(0x1b2)]('removeItem')[_0x45b07c(0x179)] = function(_0xc75be3) {
    var _0xe4a1f = _0x45b07c;
    removeOrderModal[_0xe4a1f(0x18f)][_0xe4a1f(0x1a9)] = _0xe4a1f(0x1ad), document[_0xe4a1f(0x18a)][_0xe4a1f(0x18f)][_0xe4a1f(0x172)] = 'hidden', document[_0xe4a1f(0x1b2)](_0xe4a1f(0x181))[_0xe4a1f(0x179)] = function() {
        var _0x8ee18e = _0xe4a1f;
        $[_0x8ee18e(0x177)]({
            'url': '/deleteCart',
            'type': 'DELETE',
            'success': function(_0x2a09bb) {
                var _0x3335c2 = _0x8ee18e;
                console['log']('Deleted\x20successfully'), removeOrderModal[_0x3335c2(0x18f)][_0x3335c2(0x1a9)] = _0x3335c2(0x192), document[_0x3335c2(0x1b2)](_0x3335c2(0x1bc))[_0x3335c2(0x18f)][_0x3335c2(0x1a9)] = _0x3335c2(0x1a4), document[_0x3335c2(0x18a)][_0x3335c2(0x18f)]['overflow'] = _0x3335c2(0x176), setTimeout(() => {
                    location['reload']();
                }, 0x9c4);
            }
        });
    };
}, document[_0x45b07c(0x1b2)](_0x45b07c(0x1ab))[_0x45b07c(0x179)] = function() {
    var _0x44287c = _0x45b07c;
    removeOrderModal[_0x44287c(0x18f)]['display'] = _0x44287c(0x192), document['body']['style']['overflow'] = 'auto';
}, window[_0x45b07c(0x179)] = function(_0x5944e9) {
    var _0x155d1c = _0x45b07c;
    _0x5944e9[_0x155d1c(0x198)] == removeOrderModal && (removeOrderModal[_0x155d1c(0x18f)][_0x155d1c(0x1a9)] = _0x155d1c(0x192), document['body'][_0x155d1c(0x18f)][_0x155d1c(0x172)] = 'auto');
};
const checkoutErrorMsg = document[_0x45b07c(0x1b2)](_0x45b07c(0x1a7));

function handleConfirmOrder(_0x4ed7ad) {
    var _0x163cff = _0x45b07c;
    _0x4ed7ad[_0x163cff(0x17a)] ? (checkoutErrorMsg[_0x163cff(0x18f)]['display'] = _0x163cff(0x1ad), checkoutErrorMsg[_0x163cff(0x199)] = _0x4ed7ad[_0x163cff(0x17a)]) : (checkoutErrorMsg[_0x163cff(0x18f)][_0x163cff(0x1a9)] = _0x163cff(0x192), document['getElementById']('signupSuccessModal')[_0x163cff(0x18f)][_0x163cff(0x1a9)] = _0x163cff(0x1a4), document[_0x163cff(0x18a)][_0x163cff(0x18f)][_0x163cff(0x172)] = 'hidden', setTimeout(() => {
        var _0x153612 = _0x163cff;
        window['location'] = _0x153612(0x1ac);
    }, 0x9c4));
}
document[_0x45b07c(0x1b2)]('confirmOrder')['onclick'] = function() {
    var _0x537f3c = _0x45b07c;
    const _0x4d624d = new Date();
    var _0x3241e7, _0x55b917 = $(_0x537f3c(0x1ba))[_0x537f3c(0x1b4)]();
    if (_0x55b917 == 'freePlan') _0x3241e7 = new Date(_0x4d624d['setMinutes'](_0x4d624d[_0x537f3c(0x1bb)]() + 0x3));
    else {
        if (_0x55b917 == _0x537f3c(0x18b)) _0x3241e7 = new Date(_0x4d624d[_0x537f3c(0x1c1)](_0x4d624d[_0x537f3c(0x1bb)]() + 0x5));
        else {
            if (_0x55b917 == 'threeMonthPlan') _0x3241e7 = new Date(_0x4d624d[_0x537f3c(0x1c1)](_0x4d624d['getMinutes']() + 0xa));
            else _0x55b917 == _0x537f3c(0x178) && (_0x3241e7 = new Date(_0x4d624d['setMinutes'](_0x4d624d[_0x537f3c(0x1bb)]() + 0xf)));
        }
    }
    console['log'](_0x3241e7[_0x537f3c(0x190)]()), $[_0x537f3c(0x177)]({
        'url': '/confirmCart',
        'method': 'POST',
        'data': {
            'cartPlan': $(_0x537f3c(0x1ba))[_0x537f3c(0x1b4)](),
            'timeLengthforUse': _0x3241e7,
            'totalPrice': totalPrice,
            'therapistID': therapistInformation[_0x537f3c(0x1b3)]
        },
        'success': handleConfirmOrder
    });
};

function printInvoice() {
    var _0x3d77cd = _0x45b07c,
        _0x2a69b3 = window['open']('', _0x3d77cd(0x1af), _0x3d77cd(0x193));
    return _0x2a69b3['document'][_0x3d77cd(0x1a0)](_0x3d77cd(0x185)), _0x2a69b3[_0x3d77cd(0x19a)][_0x3d77cd(0x1a0)](_0x3d77cd(0x1a5)), _0x2a69b3[_0x3d77cd(0x19a)]['write'](_0x3d77cd(0x19d)), _0x2a69b3[_0x3d77cd(0x19a)]['write'](_0x3d77cd(0x19b)), _0x2a69b3[_0x3d77cd(0x19a)][_0x3d77cd(0x1a0)](_0x3d77cd(0x183)), _0x2a69b3[_0x3d77cd(0x19a)][_0x3d77cd(0x1a0)](document[_0x3d77cd(0x1b2)]('orderTable')['innerHTML']), _0x2a69b3[_0x3d77cd(0x19a)]['write'](_0x3d77cd(0x1b5)), _0x2a69b3[_0x3d77cd(0x19a)]['write'](document[_0x3d77cd(0x1b2)](_0x3d77cd(0x17f))[_0x3d77cd(0x199)]), _0x2a69b3['document'][_0x3d77cd(0x1a0)]('</div>'), _0x2a69b3[_0x3d77cd(0x19a)]['write']('</div></div></body></html>'), _0x2a69b3[_0x3d77cd(0x19a)]['close'](), setTimeout(() => {
        var _0x327987 = _0x3d77cd;
        _0x2a69b3[_0x327987(0x1a3)](), _0x2a69b3['print']();
    }, 0x3e8), ![];
}