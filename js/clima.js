//leer documntacion
// fectch para ver lo que trae con console log
//crear el espacion en thml y css para mostrarlo (el html con java?)


console.log("funciona el linkeo al js")

/*codigo*/

//asycn await no me acuerdo pendiente me sale que la key esta disable

const climaSection = document.getElementById("temperetura")


/*fetch("https://api.weatherapi.com/v1/current.json?key=<94f949bf553e4947b00202224242207>&q=London")
.then(response => response.json())
.then(clima => console.log(clima))
.catch(err => console.log("Este es el error", err)) */

const getClima = async () => {
  try {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=<94f949bf553e4947b00202224242207>&q=London")
    const clima = await response.json()
    //return clima
    console.log(clima)
  } catch (err) {
    console.log(err)
  }
}

getClima();

