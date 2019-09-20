'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 20);
  return randomNumber;
};

// getRandomNumber();

// var avatar = randomNumber;

// debugger

var getWizardName = function () {
  var wizardName = WIZARD_NAMES[getRandomNumber() * WIZARD_NAMES.length] + ' ' + WIZARD_SURNAMES[getRandomNumber() * WIZARD_SURNAMES.length];
  return wizardName;
};

var getCoatColor = function () {
  var coatColor = COAT_COLORS[getRandomNumber() * COAT_COLORS.length];
  return coatColor;
};

var getEyesColor = function () {
  var eyesColor = EYES_COLORS[getRandomNumber() * EYES_COLORS.length];
  return eyesColor;
};

var wizards = [
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  }
];

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderRandomWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(getWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderRandomWizards();
