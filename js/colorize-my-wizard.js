'use strict';
(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
  setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = window.util.randomizeData(WIZARD_COAT_COLOR);
  });

  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = window.util.randomizeData(WIZARD_EYES_COLOR);
  });

  setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = window.util.randomizeData(WIZARD_FIREBALL_COLOR);
  });
})();
