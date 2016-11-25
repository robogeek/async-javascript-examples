$(document).ready(function() {
    $("#btn-fetch-2-texts").on('click', function(evt) {
        $.ajax({
            type: "GET",
            url: "/2texts/hello",
            success: function(data) {
                $('#2texts-hello').text(data.text);
            }
        });
        $.ajax({
            type: "GET",
            url: "/2texts/goodbye",
            success: function(data) {
                $('#2texts-goodbye').text(data.text);
            }
        });
    });
});
