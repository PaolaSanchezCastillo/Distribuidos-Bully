const random = require('random');
const readline = require('readline-sync');


var n = 0;
var procesos = new Array;
var maxPpg;
var ran;
var auxiliar = new Array;

// Estado de los procesos 
// STBY -- Estado en espera
// UP -- Principal
// DOWN -- Nodo caído 

// Ejecucion 
bully();

function bully() {
    console.log('Algoritmo Bully');
    let nodos = readline.question('Escribe la cantidad de nodos ');

    console.log('Número de nodos elegido : ' + nodos);

    for (i = 0; i < nodos; i++) {
        valor = readline.question('Escribe el valor del proceso ' + i + ' ');
        parseInt(valor);
        procesos.push({
            valor: valor,
            tipo: "STBY"
        });
    }

    auxiliar = procesos;
    // auxiliar.sort(sortByPropery(valor));
    console.log("AUXILIAR");
    console.table(auxiliar);

    // Se selecciona el proceso Lider 
    console.log();
    console.log();
    maxPpg = getMax(procesos, "valor");
    maxPpg.tipo = "UP";
    //
    console.log("AUXILIAR");
    console.table(auxiliar);
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

    convocaElleccion(parseInt(nodos));
    enviaMensajes(procesos, ran);








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
    //console.table(procesos);


}

function convocaElleccion(nodos) {

    ran = random.int(min = 0, max = nodos);

    console.log(procesos[ran].tipo);
    if (procesos[ran].tipo === "DOWN") {
        convocaElleccion(nodos);

    } else {
        console.log("El proceso " + procesos[ran].valor.toString() + " ha convocado a eleccion");



    }

}

function enviaMensajes() {
    console.log("El nodo");

    console.log("es el nuevo mayor");
    //auxiliar.sort(sortByPropery(valor));
    console.log(auxiliar[auxiliar.length - 2]);
    console.log("OTRO");
    var i = 0;
    console.log("VALOR DEL PROCESO RANDOM");
    console.log(procesos[ran].valor);
    console.log("PRIMER ELEMENTO AUXILIAR");
    //console.log(auxiliar[i].valor);
    if (procesos[ran].tipo != "DOWN") {
        while (procesos[ran].valor >= procesos[i].valor && procesos[ran].tipo != "DOWN") {
            console.log("VALOR");
            console.log(procesos[i]);
            console.log(procesos[i].valor);
            console.log("TIPO");
            console.log(procesos[i].typo);
            console.log("El proceso " + procesos[ran].valor.toString());
            console.log("Se comparo con");
            console.log(procesos[i].valor);
            i++;
        }
    }

    console.log("Eso quiere decir que : ");
    console.log(procesos[i].valor);
    console.log(procesos[i]);
    console.log("Es el mayor, por lo tanto se queda el liderato");
    console.log(procesos[i].typo);
    procesos[i].tipo = "UP";
    console.log("Nueva distribucion");
    console.table(procesos);






}

/* if (procesos[ran].valor < aux[1]) {
    console.log("VALOR");
    console.log(procesos[ran].valor);
    console.log("ENTRO");
    console.log(procesos[ran].valor);
    console.log(procesos[ran].typo);
    if (procesos[ran].tipo > aux[1]) {
        console.log(procesos[ran].valor);
        console.log(aux[1]);
    } else if (procesos[ran].tipo = aux[1]) {
        console.log(procesos[ran].valor);
        console.log(aux[1]);
        console.log("El proceso " + procesos[ran].valor.toString() + " ha tomado el control");
    }

} */



function sortByProperty(valor) {
    return function(a, b) {
        if (a[valor] > b[valor])
            return 1;
        else if (a[valor] < b[valor])
            return -1;

        return 0;
    }
}