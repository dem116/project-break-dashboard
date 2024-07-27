const climaSection = document.getElementById("climaSection");
const previsionesSection = document.getElementById("previsionesSection");

const getClima = async () => {
  try {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=94f949bf553e4947b00202224242207&q=Madrid")
    const clima = await response.json()
    return clima
   /*modos de acceso*/
   //console.log(clima);
   //console.log(clima.current.humidity);
   //console.log(clima.current.wind_kph);
   //console.log(clima.current.precip_mm);
   //console.log(clima.current.condition.text);
   //console.log(clima.current.condition.icon);
   //console.log(clima.current.temp_c);
   //console.log(clima.location.country);
   //console.log(clima.location.name);
  
  } catch (err) {
    console.log("Algo ha pasado: " + err)
  }
};

const getPrev = async () => {
  try {
    const resp = await fetch("https://api.weatherapi.com/v1/forecast.json?key=94f949bf553e4947b00202224242207&q=Madrid&days=7")
    const previsiones = await resp.json()
    return previsiones
   /*modos de acceso*/
   //console.log(previsiones.forecast.forecastday[0].hour);
  
  } catch (err) {
    console.log("Algo ha pasado: " + err)
  }
};

getClima();
getPrev();

function displayClima(clima) {
  climaSection.innerHTML = `<h1>${clima.location.name}, ${clima.location.country}</h1>
  <p class="sunny">${clima.current.condition.text}</p>
   <div class="subContainer"><p><img src="${clima.current.condition.icon}"><h2>${clima.current.temp_c}°C</h2> <div class="datos">Humedad: ${clima.current.humidity}%<br>Viento: ${clima.current.wind_kph} Km/h<br>Precipitaciones: ${clima.current.precip_mm} mm</p></div></div>
  `
};

function displayPrev(previsiones) {
  let arrPrevs = previsiones.forecast.forecastday[0].hour;
  let previsionesHTML = ''; 
  arrPrevs.forEach((element) => {
    let hora = element.time.split(' ')[1];//---> Extraer solo la hora
    previsionesHTML += `<div class="prevision">
      <img src="${element.condition.icon}" alt="Icono del clima por hora">
      <p>${hora}</p>
      <p>${element.temp_c} °C</p>
    </div>`;
  });
  previsionesSection.innerHTML = previsionesHTML; 
};

const esperarClima = async () => { //funcion para esperar a la funcion "getClima" y "getPrev"
  const clima = await getClima();
  const prevision = await getPrev();
  if (clima && prevision) {
    displayClima(clima);
    displayPrev(prevision);
  }
};

esperarClima();

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
