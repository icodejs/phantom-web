$(function () {
    var $button = $('button');
    var $result = $('.result');
    var $url = $('.url');

    $button.on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/raw',
            data: { url: $url.val() || 'http://github.com/'}
        }).done(function(img) {
            $result.html(img);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            $result.html(errorThrown);
        });
    });
});
