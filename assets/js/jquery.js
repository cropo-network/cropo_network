$(document).ready(function() {
    $('#mc-embedded-subscribe-form').submit(function(e) {
      console.log('begin submit')
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action').replace('/post?', '/post-json?').concat('&c=?'),
            data: $(this).serialize(),
            dataType: 'jsonp',
            jsonp: 'c',
            success: function(response) {
              console.log('success')
                $('#mc-embedded-subscribe-form').hide();
                $('#subscribe-result').html('Thank you for subscribing!');
            },
            error: function(response) {
              console.log('error')
                $('#subscribe-result').html('Oops! Something went wrong.');
            }
        });
        return false;
    });
});