var current = moment().add(1, 'hours').hour();
//  this is displaying at the top of my screen for todays data aka current date
$('#todaysDay').text(moment().format("LLL"));
// class of row is defined here since in my html my time block are in rows
$('.row').each(function (){
    var hour = $(this).data('hour');
    var message = localStorage.getItem(hour);
    $(this).find('description').text(message);
    $(this).addClass( hour > current ? 'future' : hour < current ? 'past' : 'present');

});

$('.row').on('click','.saveBtn', function(){
    var result = $(this).parent().find('.description').val();
    localStorage.setItem($(this).parent().data('hour'), result);
});