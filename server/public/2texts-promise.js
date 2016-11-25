$(document).ready(function() {
    $("#btn-fetch-2-texts").on('click', function(evt) {
        Promise.all([
            new Promise(function(resolve, reject) {
                console.log('before hello');
                $.ajax({
                    type: "GET",
                    url: "/2texts/hello",
                    success: function(data) {
                        $('#2texts-hello').text(data.text);
                        console.log('after hello');
                        resolve();
                    }
                });
            }),
            new Promise(function(resolve, reject) {
                console.log('before goodbye');
                $.ajax({
                    type: "GET",
                    url: "/2texts/goodbye",
                    success: function(data) {
                        $('#2texts-goodbye').text(data.text);
                        console.log('after goodbye');
                        resolve();
                    }
                });
            })
        ])
        .then(function() {
            console.log('all done');
        })
        .catch(function(err) {
            console.log(err);
        });
    });
});
