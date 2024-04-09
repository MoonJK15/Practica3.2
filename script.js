function limpiar() {
var lista  = document.querySelectorAll('p');
if (lista.length !=0) {
    var i = lista.length - 1; // Posiciona en el ultimo parrafo creado
    while (i > - 1)
    lista[i].parentNode.removeChild(lista[i--]);
} else {
    alert("No hay parrafos a elimir");
}
}

function esPar() {
    var numero = document.getElementById("num").value;
    var resultado =parImpar(numero);
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("El numero" + numero + "es" + resultado);
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    document.getElementById("num").value = "";
}

function parImpar(numero) {
    if (numero % 2 == 0) return "par";
    else  return  "impar";
}