const button = document.getElementById('botonOscuro');
const body = document.body;
let isDarkMode = false;

var es = {
    botonOscuro: "Modo oscuro",
    titulo: "La memoria RAM no deja de subir de precio",
    autor: "Mohammed Rayan - 4 de octubre de 2026",
    tituloCausa: "Por qué sube",
    textoCausa: "Los centros de datos de inteligencia artificial necesitan enormes cantidades de memoria. Los fabricantes han dedicado cada vez más producción a ese tipo de chips y queda menos para ordenadores y móviles. La escasez ha disparado los precios.",
    tituloFabricantes: "Los fabricantes",
    textoFabricantes: "Según la prensa especializada, Samsung duplicó los precios de su memoria DRAM en el primer trimestre de 2026 y los subió otro 30 % en el segundo. Los analistas de Jefferies esperan nuevas subidas en el tercer y cuarto trimestre.",
    tituloUsuario: "Qué significa para ti",
    textoUsuario: "Comprar un ordenador o un móvil sale más caro. Algunos fabricantes también reducen la cantidad de RAM de sus equipos para contener el precio final.",
    tituloFuentes: "Fuentes"
};

var en = {
    botonOscuro: "Dark mode",
    titulo: "RAM prices keep rising",
    autor: "Mohammed Rayan - October 4, 2026",
    tituloCausa: "Why it is rising",
    textoCausa: "Artificial intelligence data centers need huge amounts of memory. Manufacturers have devoted more and more production to that type of chip, leaving less for computers and phones. The shortage has driven prices up.",
    tituloFabricantes: "The manufacturers",
    textoFabricantes: "According to the specialized press, Samsung doubled the prices of its DRAM memory in the first quarter of 2026 and raised them another 30% in the second. Jefferies analysts expect further increases in the third and fourth quarters.",
    tituloUsuario: "What it means for you",
    textoUsuario: "Buying a computer or a phone costs more. Some manufacturers are also reducing the amount of RAM in their devices to keep the final price down.",
    tituloFuentes: "Sources"
};

function darkMode() {
    if (isDarkMode== false) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        isDarkMode = true;
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        isDarkMode = false;
    }
}

function cambiarIdioma() {
    var idioma = document.getElementById("idioma").value;
    var textos = es;

    if (idioma == "en") {
        textos = en;
    }

    document.getElementById("botonOscuro").textContent = textos.botonOscuro;
    document.getElementById("titulo").textContent = textos.titulo;
    document.getElementById("autor").textContent = textos.autor;
    document.getElementById("tituloCausa").textContent = textos.tituloCausa;
    document.getElementById("textoCausa").textContent = textos.textoCausa;
    document.getElementById("tituloFabricantes").textContent = textos.tituloFabricantes;
    document.getElementById("textoFabricantes").textContent = textos.textoFabricantes;
    document.getElementById("tituloUsuario").textContent = textos.tituloUsuario;
    document.getElementById("textoUsuario").textContent = textos.textoUsuario;
    document.getElementById("tituloFuentes").textContent = textos.tituloFuentes;
}

button.addEventListener('click', darkMode);
document.getElementById("idioma").addEventListener("change", cambiarIdioma);