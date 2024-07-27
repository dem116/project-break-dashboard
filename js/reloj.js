function darHora() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Añadir el 0 en los numeros menores de 10
    min = checkCero(min);
    sec = checkCero(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;

    var day = today.getDate(); 
    var mes = today.getMonth() + 1; // Sumar 1 porque los meses comienzan desde 0 ->metodo
    var year = today.getFullYear();
    day = checkCero(day);
    mes = checkCero(mes);
    document.getElementById("date").innerHTML = day + " / " + mes + " / " + year;

    var time = setTimeout(function(){ darHora() }, 500);
    checkFrase();
}
function checkCero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

function checkFrase() {
        let ahora=new Date(); 
        let hora=ahora.getHours();
            if(hora>=1 && hora<7){
                texto="Es hora de descansar. Apaga y sigue mañana";  
            }
            if(hora>=7 && hora<12){ 
                texto="Buenos días, a desayunar fuerte y a darle al código";
            }
            if (hora>=12 && hora<14){ 
                texto="Dale un rato más pero no olvides comer";
            }
            if (hora>=14 && hora<16){ 
                texto="Espero que hayas comido";
            }
            if (hora>=16 && hora<18){ 
                texto="Buenas tardes, toca el último empujón";
            }
            if (hora>=18 && hora<22){ 
                texto="Esto ya son horas extras... piensa en parar pronto";
            }
            if (hora>=22 && hora<=0) {
                texto="Buenas noches, es hora parar y descansar";
            }
           document.getElementById('frase').innerHTML = texto;
           };


/*Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
Desde las 14:01 hasta las 16:00 Espero que hayas comido
Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar*/