// Получение текущей даты
var currentDate = new Date();

// Увеличение значения дня на 1
currentDate.setDate(currentDate.getDate() + 1);

// Получение отдельных составляющих даты
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
var year = currentDate.getFullYear();

// Форматирование даты в нужном формате (например, "дд.мм.гггг")
var formattedDate = day;

// Обновление значения на вашем сайте
document.getElementById('dateElement').innerHTML = formattedDate;
