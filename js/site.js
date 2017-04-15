(function() {
  $(function() {
    $('.collapse').collapse({toggle: false});

    $('#Projects a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash.slice(1);

        $('body').animate(
          {scrollTop: $('a[name="' + hash + '"]').offset().top},
          600,
          function() {
            window.location.hash = hash;
        });
      }
    });

    $('.email-link').click(function(e) {
      e.preventDefault();

      var curVal = null,
        i = 0,
        parts = [19, 10, 23, '@', 28, 35, 25, 18, '.', 21, 10],
        x = parts.length;

      while (i < x) {
        curVal = parts[i];
        if (typeof curVal === 'number') {
          parts[i] = curVal.toString(36);
        }
        i++;
      }

      return window.open(['mailto:', parts.join(''), '?subject=Hi%2C%20Jan!'].join(''));
    });
  });

}).call(this);
