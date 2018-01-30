(function() {
  const form = $('.popup-form')[0];
  const popupBtn = $('.call-popup');
  const overlay = $('.popup-overlay');
  const close = $('.popup-close');
  const confirmBtn = $('.popup-confirm');
  const mainPopup = $('.popup.main-popup');
  const thankPopup = $('.popup.thank-you');

  // Opening main popup
  popupBtn.on('click', function() {
    // Disable after setting the alert
    if($(this).hasClass('enabled')) {
      overlay.removeClass('hidden');
    }
  });

  // Initial state
  function popupReset() {
    overlay.addClass('hidden');
    mainPopup.removeClass('hidden');
    thankPopup.addClass('hidden');
  }

  // Closing the popup
  close.on('click', () => {
    popupReset();
  });

  //Submit the form
  confirmBtn.on('click', function(event) {
    if(form.checkValidity()) {
      event.preventDefault();
      popupBtn.removeClass('enabled');
      popupBtn.find('span').text('Alert is set');
      mainPopup.addClass('hidden');
      thankPopup.removeClass('hidden');
      window.setTimeout(() => {
        popupReset()
      }, 2000);
    }
  });
})();


