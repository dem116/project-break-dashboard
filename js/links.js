//console.log("funciona el enganche");

window.onload = function() {
  if (localStorage) { //-->si hay algo en localstorage
    displayLinks(); // Cargar los enlaces al cargar la página

    document.getElementById('linksForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Previene el comportamiento por defecto del formulario

      // Obtener los valores de los inputs
      let linkName = document.getElementById('linkName').value;
      let link = document.getElementById('link').value;

      // Ver si los valores no esta vacios
      if (linkName && link) {
      
        let links = JSON.parse(localStorage.getItem('links')) || [];

        links.push({ name: linkName, url: link });

        localStorage.setItem('links', JSON.stringify(links));

        // Verificar que ahora el valor está disponible para verse en consola o agregarse
        console.log("Guardado:", JSON.parse(localStorage.getItem('links')));

        displayLinks();
      } else {
        console.log("Por favor, completa ambos campos."); // Mensaje para saber si esta vacio
      }
    });
  }
};

function displayLinks() {
  const listaLinks = document.getElementById('listaLinks');
  const contenedorLista = document.getElementById('contenedorLista');

  if (!listaLinks || !contenedorLista) {
    console.error("Elementos 'listaLinks' o 'contenedorLista' no encontrados en el DOM.");
    return;
  }

  listaLinks.innerHTML = ""; // Limpiar la lista existente

  // Obtener los datos de localStorage
  const links = JSON.parse(localStorage.getItem('links')) || [];

  if (links.length > 0) {
    links.forEach(linkObj => {
      const linkItem = document.createElement('li');
      linkItem.innerHTML = `<a href="${linkObj.url}" target="_blank">${linkObj.name}</a>`;
      listaLinks.appendChild(linkItem);
    });
  } else {
    contenedorLista.innerHTML = "¡No has guardado ningún link!";
  }
};

console.log(localStorage);

/*versiones anteriores */
/*window.onload = function() {
    if (localStorage) {
      document.getElementById('linksForm').addEventListener('submit', function(event) {
        event.preventDefault(); // -->Previene el comportamiento por defecto del formulario
  
        // Obtener el valors de los unput
        let linkName = document.getElementById('linkName').value;
        let link = document.getElementById('link').value;
  
        // Verificar que los valores no estan vacios
        if (linkName && link) {

            //guardar
          localStorage.setItem('linkName', linkName);
          localStorage.setItem('link', link);
  
          // vereificaar que ahora el valor está disponible para verse en consola o agregarse
          console.log("Guardado:", localStorage.getItem('linkName'));
          console.log("Guardado:", localStorage.getItem('link'));
  
          // Mostrar los enlaces
          displayLinks();
        } else {
          console.log("Por favor, completa ambos campos."); //--->mensaje para saber si estan vacios
        }
      });
    }
  };
  
  function displayLinks() {
    const name = localStorage.getItem('linkName');
    const link = localStorage.getItem('link');
    const listaLinks = document.getElementById('listaLinks')
  
    // Verificar que los valores obtenidos no sean null
    if (name && link) {
        const linkItem = document.createElement('li');
        linkItem.innerHTML = `<a href="${link}">${name}</a>`;
        listaLinks.appendChild(linkItem);
        //document.getElementById('listaLinks').innerHTML = `<li><a href="${link}">${name}</a><li>.`;
    } else {
      document.getElementById('contenedorLista').innerHTML = "¡No has guardado el link!";
      
    }
  };

  console.log(localStorage);*/



  /*for (let i = 0; i < localStorage.length; i++) {
    document.getElementById('listaLinks').appendChild = localStorage.key(i);
  };
  

/* ESTE EL ULTIMO ANTES DE LA CORRECION ULTIMA window.onload = function() { //--->evento que se dispara cuando toda la página web se carga para tener todos los elementos
    if (localStorage) {
      document.getElementById('linksForm').addEventListener('submit', function(event) {
        event.preventDefault(); // metodo del objeto event que previene el comportamiento por defecto del formulario
  
        
        let linkName = document.getElementById('linkName').value;
        let link = document.getElementById('link').value
  
        
        localStorage.setItem('linkName', linkName);
        localStorage.setItem('link', link);

        //Ahora el valor esta disponible para verse en consola
        console.log(localStorage.getItem('linkName'));
        console.log(localStorage.getItem('link'));
        displayLinks();
      });
    }
  }
  
 function displayLinks() {

    const name = localStorage.getItem('linkName');
    const link = localStorage.getItem('link');

    if (name != "undefined" || name != "null") {
      document.getElementById('contenedorLista').innerHTML = "¡No has guardado el link!";
    } else {
      document.getElementById('listaLinks').innerHTML = "Este es el nombre: " + name + " y este el enlace: " + link;
      }
    }*/

      /*const nameItem = document.createElement('li');
      nameItem.textContent = linkName;
      nameItem.appendChild(linkName);

      const linkItem = document.createElement('li');
      linkItem.textContent = link;
      linkItem.appendChild(link);*/
    



/*window.onload = function() {
if (localStorage) {

document.getElementById('linksForm').addEventListener('submit', function() {
    // Get the value of the name field.
    var linkName = document.getElementById('linkName').value;

    // Save the name in localStorage.
    localStorage.setItem('linkName', linkName);
  });
  }
}

console.log(localStorage.getItem(linkName));---> que no sale fuera?*/