const climaSection = document.getElementById("temperetura");
const previsionesSection = document.getElementById("previsiones");

const getClima = async () => {
  try {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=94f949bf553e4947b00202224242207&q=Madrid")
    const clima = await response.json()
    return clima
   /*modos de acceso
   console.log(clima);
   console.log(clima.current.humidity);
   console.log(clima.current.wind_kph);
   console.log(clima.current.precip_mm);
    console.log(clima.current.condition.text);
    console.log(clima.current.condition.icon);
    console.log(clima.current.temp_c);
    console.log(clima.location.country);
    console.log(clima.location.name);*/
  
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
  climaSection.innerHTML = `<h1>${clima.location.name}, ${clima.location.country}</h1><p class="temp">${clima.current.temp_c}°C</p><br>
  <p>${clima.current.condition.text}</p><br><img src="${clima.current.condition.icon}">
  Humedad: ${clima.current.humidity}% Viento: ${clima.current.wind_kph} Km/h Precipitaciones: ${clima.current.precip_mm} mm`
  
};

function displayPrev(previsiones) {
  let arrPrevs = previsiones.forecast.forecastday[0].hour;
  let previsionesHTML = ''; 
  arrPrevs.forEach((element) => {
    let hora = element.time.split(' ')[1];//---> Extraer solo la hora
    previsionesHTML += `<div class="prevision">
      <p>${hora}</p>
      <p>${element.temp_c} °C</p>
      <img src="${element.condition.icon}" alt="Icono del clima por hora">
    </div>`;
  });
  previsionesSection.innerHTML = previsionesHTML; // Establece el contenido acumulado
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