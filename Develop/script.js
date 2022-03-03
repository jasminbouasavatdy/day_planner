var current = moment().add(1 , 'hours').hour();

$('#currentDay').text(moment()).format("LLL");

$('.time-block').each(function (){
    var hour = $(this).data('hour');
    var message = localStorage.getItem(hour);
    $(this).find('description').text(message);
    $(this).addClass( hour > current ? 'future' : hour < current ? 'past' : 'present');

});
