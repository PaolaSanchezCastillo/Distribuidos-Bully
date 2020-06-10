const random = require('random');
const readline = require('readline-sync');


var n = 0;
var procesos = new Array;
var maxPpg;
var nodos;


// Estado de los procesos 
// STBY -- Estado en espera
// UP -- Principal
// DOWN -- Nodo caído 

// Ejecucion 
bully();

function bully() {
    console.log('Algoritmo Bully');
    nodos = readline.question('Escribe la cantidad de nodos ');

    console.log('Número de nodos elegido : ' + nodos);

    for (i = 0; i < nodos; i++) {
        valor = readline.question('Escribe el valor del proceso ' + i + ' ');
        parseInt(valor);
        procesos.push({
            "valor": valor,
            "tipo": "STBY"
        });
    }

    // Se selecciona el proceso Lider 
    console.log();
    console.log();
    maxPpg = getMax(procesos, "valor");
    maxPpg.tipo = "UP";
    console.log('El nodo principal es :');
    console.log(maxPpg);
    console.log();
    console.log('Procesos : ');
    console.table(procesos);
    console.log();
    console.log();

    const falla = readline.question('Presiona 0 para generar una falla ');


    if (falla === "0") {
        console.log();
        console.log('Se genera una falla');
        mataProceso(maxPpg);
    } else {
        console.log('No hay fallas')
    }

    console.log();

    convocaEleccion(nodos);



}

function getMax(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop])) max = arr[i];
    }
    return max;
}




function mataProceso(maxPpg) {
    maxPpg.tipo = "DOWN";
    console.log();
    console.info("El proceso: ");
    console.info(maxPpg);

    console.info(' ha fallado.\n\n');
    console.log('Nueva distribución de procesos');
    console.table(procesos);


}

function convocaEleccion(nodos) {

    console.log('Se convoca a una nueva eleccion\n\n');
    console.log('Cantidad de nodos ' + nodos);
    var maximo = parseInt(nodos);
    var eleccion = random.int(min = 0, max = maximo);
    if (procesos[eleccion].tipo === 'DOWN') {
        convocaEleccion();
    } else {
        procesos[eleccion].tipo = "UP";
        console.table(procesos);
    }


}