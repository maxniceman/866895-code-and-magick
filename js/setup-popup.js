'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  // handlers
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.dialog.getDefaultSetupPosition();
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.dialog.setDefaultSetupPosition();
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
