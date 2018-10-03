'use strict';
(function () {
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  setupWizardCoat.addEventListener('click', function () {
    var newColor = window.util.randomizeData(window.WIZARD_COAT_COLOR);
    setupWizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  setupWizardEyes.addEventListener('click', function () {
    var newColor = window.util.randomizeData(window.WIZARD_EYES_COLOR);
    setupWizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = window.util.randomizeData(WIZARD_FIREBALL_COLOR);
  });

  window.wizard = wizard;
})();
