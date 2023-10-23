var current_date = new Date();
current_date.setDate(current_date.getDate() + 1);

var month = new Array(
  'СІЧНЯ',
  'ЛЮТОГО',
  'БЕРЕЗНЯ',
  'КВІТНЯ',
  'ТРАВНЯ',
  'ЧЕРВНЯ',
  'ЛИПНЯ',
  'СЕРПНЯ',
  'ВЕРЕСНЯ',
  'ЖОВТНЯ',
  'ЛИСТОПАДА',
  'ГРУДНЯ'
);

document.getElementById('monthElement').innerHTML =
  month[current_date.getMonth()];
