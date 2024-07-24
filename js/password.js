//vamos con este hast que me respondan de la api

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
        throw new Error("La longitud mínima de la clave debe ser 12 y máximo 50");
    }

    let result = "";
    const minus = "abcdefghijklmnopqrstuvwxyz".split("");
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const nums = "0123456789".split("");
    const symbols = "!@#$%^&*()-_+=".split("");

    // Rellenar con caracteres aleatorios
    const allChars = [...minus, ...mayus, ...nums, ...symbols];
    for (let i = 0; i < longitud; i++) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        result += randomChar;
    }

    // Verificar y asegurar al menos un carácter de cada tipo
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

    // Recortar la longitud a la solicitada en caso de haber agregado caracteres extra
    result = result.slice(0, longitud);

    // Mezclar la contraseña para que no siga el mismo patrón
    result = result.split('').sort(() => Math.random() - 0.5).join('');

    return result;
};
//console.log(generarClave(12));


/*const mostrarClave = (result) => {
    pssw = result;
    container.appendChild(passw);
};

mostrarClave();*/

/*const generarClave = (longitud) => {
    let result = "";
    const minus = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
    const mayus = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
    const  nums = "0 1 2 3 4 5 6 7 8 9".split(" ");
    const symbol = "! @ # $ % ^ & * ( ) - _ = +".split(" ");

    if (longitud < 4 || longitud > 50) {
        throw new Error("La longitud mínima de la clave debe ser 12 y máximo 50");
    }

    else {
        for(i=0;i<longitud;i++) {
            const random1 = Math.floor(Math.random() * minus.length);
            const random2 = Math.floor(Math.random() * mayus.length);
            const random3 = Math.floor(Math.random() * nums.length);
            const random4 = Math.floor(Math.random() * symbol.length);
            result += minus[random1]
            result += mayus[random2]
            result += nums[random3]
            result += symbol[random4]
            }

    return result;}
  };
  
  console.log(generarClave(4))*/


   /*for(i=0;i<longitud;i++) {
        const random2 = Math.floor(Math.random() * mayus.length);
        result += mayus[random2]
      }*/

    /*for(i=0;i<longitud;i++) {
        const random3 = Math.floor(Math.random() * nums.length);
        result += nums[random3]
      }*/

    /*for(i=0;i<longitud;i++) {
        const random4 = Math.floor(Math.random() * symbol.length);
        result += symbol[random4]
      }*/