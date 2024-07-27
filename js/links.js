window.onload = function() {
  if (localStorage) { 
    displayLinks(); 

    document.getElementById('linksForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      let linkName = document.getElementById('linkName').value;
      let link = document.getElementById('link').value;

      if (linkName && link) {
        let links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({ name: linkName, url: link });
        localStorage.setItem('links', JSON.stringify(links));

        console.log("Guardado:", JSON.parse(localStorage.getItem('links')));

        displayLinks();
      } else {
        console.log("Falta completar campos.");
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

  listaLinks.innerHTML = ""; 

  const links = JSON.parse(localStorage.getItem('links')) || [];

  if (links.length > 0) {
    links.forEach((linkObj, index) => {
      const linkItem = document.createElement('li');
      linkItem.innerHTML = `<a href="${linkObj.url}" target="_blank">${linkObj.name}</a> <button class="botonDel" data-index="${index}">Delete</button>`;
      listaLinks.appendChild(linkItem);
    });

    // Añadir event listeners a todos los botones de delete
    document.querySelectorAll('.botonDel').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        deleteLink(index);
      });
    });
  } else {
    contenedorLista.innerHTML = "¡No has guardado ningún link!";
  }
};

function deleteLink(index) {
  let links = JSON.parse(localStorage.getItem('links')) || [];
  if (index > -1) {
    links.splice(index, 1); // Eliminar el elemento en el índice actual
    localStorage.setItem('links', JSON.stringify(links)); // Actualizar localStorage
    displayLinks(); // Actualizar el DOM
  }
};

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
