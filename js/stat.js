'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CHART_GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var indent = CLOUD_X + GAP * 2 + (CHART_GAP + TEXT_WIDTH) * i;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], indent, CLOUD_HEIGHT - GAP * 1.5);
    ctx.fillText(Math.round(times[i]), indent, CLOUD_HEIGHT - GAP - FONT_GAP - ((BAR_HEIGHT * Math.round(times[i])) / maxTime) - GAP * 2);
    ctx.fillStyle = 'hsla(232, ' + Math.round(Math.random() * 100) + 1 + '%, 38%, 1)';

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(indent, CLOUD_HEIGHT - GAP - FONT_GAP - ((BAR_HEIGHT * Math.round(times[i])) / maxTime), BAR_WIDTH, (BAR_HEIGHT * Math.round(times[i])) / maxTime);
  }
};
