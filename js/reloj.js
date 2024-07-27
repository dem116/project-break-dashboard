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

    let time = setTimeout(function(){ darHora() }, 500);
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


/*imagenes de fondo*/
/*let listaImg = ["./img/bub-graphics-mNPp4u_duhs-unsplash.jpg","./img/fotis-fotopoulos-Y_mC-SC_DkU-unsplash.jpg", 
    "./img/francesco-ungaro-t4jbFTCEBC0-unsplash.jpg", "./img/joshua-sortino-f3uWi9G-lus-unsplash.jpg",
"./img/julia-solonina-ci19YINguoc-unsplash.jpg","./img/koushik-chowdavarapu-JT8IWAaxpQk-unsplash.jpg",
"./img/krisjanis-kazaks-0tm5RpZSJzQ-unsplash.jpg", "./img/luke-miller-5OjiVFkZl-w-unsplash.jpg",
"./img/mauro-lima-MCqSjOllMZg-unsplash.jpg", "./img/michael-fousert-lE5-z4nTCTQ-unsplash.jpg",
"./img/nellie-adamyan-R8JYfe4I58g-unsplash.jpg","./img/tom-podmore-N1ONXKUAiGU-unsplash.jpg",
"./img/weichao-deng-Qykc-5DcfmU-unsplash.jpg"]
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * listaImg.length);
    const selectedImage = listaImg[randomIndex];
    document.body.style.backgroundImage = `url(${selectedImage})`;
}

setInterval(changeBackgroundImage, 15000);
changeBackgroundImage();*/


/*Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
Desde las 14:01 hasta las 16:00 Espero que hayas comido
Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar*/