(function () {
  $(function () {
    $(this).ekkoLightbox({
      loadingMessage: 'Loading all the things...',
    });
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });
  });
}).call(this);