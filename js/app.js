/* Fetch API (Tecnología para realizar peticiones que desplazó a AJAX) */

// Evento 'click' para el elemento del botón "CARGAR TXT"
document .getElementById( 'txtBtn' ) .addEventListener( 'click', cargarTXT );

// Function carga datos del archivo datos.txt
function cargarTXT() {
    // FetchAPI usando Promises
    fetch( 'datos.txt' )                    // Se conecta a los datos
       .then( function( response ) {        // Recibe la respuesta
        console .log( 'Respuesta', response );

        return response .text();            // Promise: 
                                            //   Indica el método en el que se recibirán los datos, se puede revisar 
                                            //   el 'proto' para ver los métodos disponibles

    }) .then( function( data ) {            // Recibe los datos en el formato del método indicado anteriormente
        console .log( data );
        document .getElementById( 'resultado' ) .innerHTML = data;      // Coloca los datos obtenidos en el DOM
    }) .catch( function( error ) {          // Captura los ERRORES
        console .log( 'ERROR', error );
    });
}