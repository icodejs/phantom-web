#Phantom Web

** Unfinished **

    $ phantomjs create.js

    $ node index.js

Open localhost:4007 in browser window

```javascript

$(function () {
    var $button = $('button');
    var $result = $('.result');

    $button.on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/convert',
            contentType: 'image/png',
            data: { url: 'bar' }
        }).done(function(img) {
            $result.html(img);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            $result.html(errorThrown);
        });
    });
});

```
