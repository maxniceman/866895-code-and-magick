'use strict';
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_AMOUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = setup.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

// random data function
function randomizeData(data) {
  var item = Math.floor(Math.random() * data.length);
  return data[item];
}
// final wizards array
function createFinaleArray() {
  var wizardsArray = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizardsArray[i] = {
      name: randomizeData(WIZARD_NAME) + ' ' + randomizeData(WIZARD_LASTNAME),
      coatColor: randomizeData(WIZARD_COAT_COLOR),
      eyesColor: randomizeData(WIZARD_EYES_COLOR)
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

setup.querySelector('.setup-similar').classList.remove('hidden');

// handlers
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = randomizeData(WIZARD_COAT_COLOR);
});

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = randomizeData(WIZARD_EYES_COLOR);
});

setupWizardFireball.addEventListener('click', function () {
  setupWizardFireball.style.background = randomizeData(WIZARD_FIREBALL_COLOR);
});
