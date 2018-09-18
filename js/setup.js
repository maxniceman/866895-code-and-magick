'use strict';
(function () {
  var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_AMOUNT = 4;
  var setup = document.querySelector('.setup');

  setup.querySelector('.setup-similar').classList.remove('hidden');

  // final wizards array
  function createFinaleArray() {
    var wizardsArray = [];
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      wizardsArray[i] = {
        name: window.util.randomizeData(WIZARD_NAME) + ' ' + window.util.randomizeData(WIZARD_LASTNAME),
        coatColor: window.util.randomizeData(window.WIZARD_COAT_COLOR),
        eyesColor: window.util.randomizeData(window.WIZARD_EYES_COLOR)
      };
    }
    return wizardsArray;
  }

  var wizards = createFinaleArray();
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // render wizard
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // fill template
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
})();
