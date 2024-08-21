let listaImg = ["./img/bub-graphics-mNPp4u_duhs-unsplash.jpg","./img/fotis-fotopoulos-Y_mC-SC_DkU-unsplash.jpg", 
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
changeBackgroundImage();
