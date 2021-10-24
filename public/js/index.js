$(document).ready(function () {
    $("#name").bind("paste", function(e){
        var longUrl = e.originalEvent.clipboardData.getData('text');
        const data = JSON.stringify({
            url: longUrl,
            error: false
        });
        $.ajax({
            type: 'POST',
            contentType : 'application/json',
            url: '/api/new',
            data,
            success: (data) => {
                $('#name').val(`${data.shortUrl}`);
            }
        });
    } );
});
