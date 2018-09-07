'use strict';
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

var wizard = [];

function randomizeData(data, propertyName) {
  var person = {};
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    var item = Math.floor(Math.random() * data.length);
    person[i] = {
      [propertyName]: data[item],
    };
  }
  return person;
};

//randomizeData(WIZARD_NAME, WIZARD_LASTNAME, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR);
var randomCoats = randomizeData(WIZARD_COAT_COLOR, 'coatColor');
var randomEyes = randomizeData(WIZARD_EYES_COLOR, 'eyesColor');
console.log(randomCoats);
console.log(randomEyes);

var setupBox = document.querySelector('.setup');
setupBox.classList.remove('hidden');


