'use strict';
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

// random data function
function randomizeData(data) {
  var persons = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    var item = Math.floor(Math.random() * data.length);
    persons[i] = data[item];
  }
  return persons;
}
// function to combine 2 randomize arrays of name and last name
function combineTwoArrays(array01, array02) {
  var fullName = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    var item01 = array01[i];
    var item02 = array02[i];
    fullName[i] = item01 + ' ' + item02;
  }
  return fullName;
}
// final wizards array
function createFinaleArray(array01, array02, array03) {
  var wizardsArray = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    var item01 = array01[i];
    var item02 = array02[i];
    var item03 = array03[i];
    wizardsArray[i] = {
      name: item01,
      coatColor: item02,
      eyesColor: item03
    };
  }
  return wizardsArray;
}
var randomName = randomizeData(WIZARD_NAME);
var randomLastName = randomizeData(WIZARD_LASTNAME);
var randomCoats = randomizeData(WIZARD_COAT_COLOR);
var randomEyes = randomizeData(WIZARD_EYES_COLOR);
var randomFullName = combineTwoArrays(randomName, randomLastName);
var wizards = createFinaleArray(randomFullName, randomCoats, randomEyes);


var setupBox = document.querySelector('.setup');
setupBox.classList.remove('hidden');

var similarListElement = setupBox.querySelector('.setup-similar-list');
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

setupBox.querySelector('.setup-similar').classList.remove('hidden');
