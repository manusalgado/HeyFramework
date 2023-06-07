var hey = Hey('Manuel', 'Salgado')
console.log(hey);
hey.greet().setLang('es').greet(true).log();

$('#login').click(function() {
    var loginHey = Hey('Manuel', 'salgado');

    console.log(loginHey);

    $('#logindiv').hide();

    loginHey.setLang($('#lang').val()).HTMLGreeting('#greetings', true).log()
})