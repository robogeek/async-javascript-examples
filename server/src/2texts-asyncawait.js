$(document).ready(function() {
    $("#btn-fetch-2-texts").on('click', function(evt) {
        async function twotexts() {
            await new Promise(function(resolve, reject) {
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
            });
            await new Promise(function(resolve, reject) {
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
            });
            console.log('all done');
        }
        twotexts()
        .catch(function(err) {
            console.error(err);
        });
    });
});
