var socket = io();

$('form').on('submit', function(){
    var initials = $('#initials').val();
    var text = $('#message').val();
    var chat_message = initials.concat(' says: ').concat(text);
    socket.emit('message', chat_message);
    $('#message').val('');
    $('#initials').val('');
    return false;
});

socket.on('message', function(msg){
    $('<li>').text(msg).appendTo('#history');
});