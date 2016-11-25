$(document).ready(function() {

    $("#btn-fetch-2-texts").on('click', function(evt) {
        async.series([
            function(done) {
                console.log('before hello');
                $.ajax({
                    type: "GET",
                    url: "/2texts/hello",
                    success: function(data) {
                        $('#2texts-hello').text(data.text);
                        console.log('after hello');
                        done();
                    }
                });
            },
            function(done) {
                console.log('before goodbye');
                $.ajax({
                    type: "GET",
                    url: "/2texts/goodbye",
                    success: function(data) {
                        $('#2texts-goodbye').text(data.text);
                        console.log('after goodbye');
                        done();
                    }
                });
            }
        ],
        function(err) {
            console.log('all done');
        });
    });
});
