// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var curSection, tblCntr;
    tblCntr = $('#TableContainer');
    curSection = null;
    $('header').addClass('bg-' + Math.floor((Math.random() * 5) + 1));
    $('#EmailLink').click(function(e) {
      var curVal, i, parts, x;
      e.preventDefault();
      curVal = null;
      parts = [19, 28, 35, 25, 18, 21, 10, '@', 16, 22, 10, 18, 21, '.', 12, 24, 22];
      i = 0;
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
    $('.exp-link').on('click', function(e) {
      e.preventDefault();
      curSection = $('#' + $(this).attr('rel'));
      curSection.show();
      return tblCntr.slideToggle();
    });
    return $('#ExpBack').on('click', function(e) {
      e.preventDefault();
      return tblCntr.slideToggle(function() {
        return curSection.hide();
      });
    });
  });

}).call(this);