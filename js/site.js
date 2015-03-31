(function() {
  $(function() {
    // $('header').addClass('bg-' + Math.floor((Math.random() * 5) + 1));
    $('.collapse').collapse({toggle: false});

    return $('.email-link').click(function(e) {
      e.preventDefault();

      var curVal = null,
        i = 0,
        parts = [19, 28, 35, 25, 18, 21, 10, '@', 16, 22, 10, 18, 21, '.', 12, 24, 22],
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
