$(document).ready(function() {
    $("#btn-fetch-lorem").on('click', function(evt) {
        console.log('before lorem text');
        $.ajax({
            type: "GET",
            url: "/txt/lorem",
            success: function(data) {
                $('#lorem-text')
                    .empty()
                    .append(data.text);
                // $('#lorem-text').text(data.text);
                console.log('after lorem text');
            }
        });
    });
});
