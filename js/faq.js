$('.question').click(function () {
  $(this).find('.content').toggle(200); //скрытие, показ ответа
  $(this).find('nine-svg').css('transform', 'rotate(0deg)'); //поворот стрелки
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
    $(this).find('nine-svg').css('transform', 'rotate(180deg)'); //поворот стрелки
  }
});
