document.getElementById("getClaveBtn").addEventListener("click", () => {
    const numCaracteres = document.getElementById("numCaracteres").value;
    const container = document.getElementById("campoClave");

    // Limpiar el contenido anterior del campoClave
    container.innerHTML = "";

    try {
        const longitud = parseInt(numCaracteres);

        // Generar la clave y crear un elemento de lista para mostrarla
        const clave = generarClave(longitud);
        const li = document.createElement("li");
        li.textContent = clave;
        container.appendChild(li);
    } catch (error) {
        // Manejo de errores si la longitud es incorrecta
        const li = document.createElement("li");
        li.textContent = error.message;
        container.appendChild(li);
    }
});

const generarClave = (longitud) => {
    if (longitud < 12 || longitud > 50) {
        throw new Error("La longitud mínima de la contraseña debe ser 12 y máximo 50");
    }

    let result = "";
    const minus = "abcdefghijklmnopqrstuvwxyz".split("");
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const nums = "0123456789".split("");
    const symbols = "!@#$%^&*()-_+=".split("");

    // Rellena con caracteres aleatorios
    const allChars = [...minus, ...mayus, ...nums, ...symbols];
    for (let i = 0; i < longitud; i++) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        result += randomChar;
    }

    // Verifica y asegurar al menos un carácter de cada tipo
    if (!result.split('').some(char => minus.includes(char))) {
        result += minus[Math.floor(Math.random() * minus.length)];
    }
    if (!result.split('').some(char => mayus.includes(char))) {
        result += mayus[Math.floor(Math.random() * mayus.length)];
    }
    if (!result.split('').some(char => nums.includes(char))) {
        result += nums[Math.floor(Math.random() * nums.length)];
    }
    if (!result.split('').some(char => symbols.includes(char))) {
        result += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Recorta la longitud a la solicitada en caso de haber agregado caracteres extra
    result = result.slice(0, longitud);

    // Mezclar la contraseña para que no siga el mismo patrón
    result = result.split('').sort(() => Math.random() - 0.5).join('');

    return result;
};