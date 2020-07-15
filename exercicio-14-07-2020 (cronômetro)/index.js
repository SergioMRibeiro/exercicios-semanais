cronometro = (() =>{
    var contSegundos = 0;
    var contMinutos = 0;
    var contHoras = 0;

    var cont;

    function iniciar (){
        cont = setInterval(timer, 1000);

    }

    function parar(){
        clearInterval(cont);
    }

    function zerar(){
        parar()
        contSegundos = 0;
        contMinutos = 0;
        contHoras = 0;
        formatacao


    }

    function timer(){
        contSegundos++;
        if (contSegundos == 60){
            contMinutos++;
            contSegundos = 0;
        }
        else if(contMinutos == 60){
            contHoras++;
            contMinutos = 0;
        }
        document.getElementById('temporizador').innerText = formatacao();

    }

    function formatacao(){
        var segundos = (contSegundos < 10)? `0${contSegundos}`:contSegundos;
        var minutos = (contMinutos < 10)? `0${contMinutos}`:contMinutos;
        var horas = (contHoras < 10)? `0${contHoras}`:contHoras;

        return `${horas}:${minutos}:${segundos}`;
    }

    return{
        iniciar,
        parar,
        zerar
    }
})()

document.write(cronometro.timer);