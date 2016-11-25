'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

$(document).ready(function () {
    $("#btn-fetch-2-texts").on('click', function (evt) {
        let twotexts = (() => {
            var _ref = _asyncToGenerator(function* () {
                yield new Promise(function (resolve, reject) {
                    console.log('before hello');
                    $.ajax({
                        type: "GET",
                        url: "/2texts/hello",
                        success: function (data) {
                            $('#2texts-hello').text(data.text);
                            console.log('after hello');
                            resolve();
                        }
                    });
                });
                yield new Promise(function (resolve, reject) {
                    console.log('before goodbye');
                    $.ajax({
                        type: "GET",
                        url: "/2texts/goodbye",
                        success: function (data) {
                            $('#2texts-goodbye').text(data.text);
                            console.log('after goodbye');
                            resolve();
                        }
                    });
                });
                console.log('all done');
            });

            return function twotexts() {
                return _ref.apply(this, arguments);
            };
        })();

        twotexts().catch(function (err) {
            console.error(err);
        });
    });
});