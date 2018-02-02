/* Fetch API (Tecnología para realizar peticiones que desplazó a AJAX) */

// Evento 'click' para el elemento del botón "CARGAR TXT"
document .getElementById( 'txtBtn' ) .addEventListener( 'click', cargarTXT );    

// Evento 'click' para el elemento del botón "CARGAR JSON"
document .getElementById( 'jsonBtn' ) .addEventListener( 'click', cargarJSON );

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

// Function carga datos del archivo datos.txt
function cargarJSON() {
    // FetchAPI usando Promises
    fetch( 'empleados.json' )               // Se conecta a los datos
        .then( function( response ) {       // Recibe la respuesta
            console .log( 'Respuesta', response );

            return response .json();        // Promise: 
                                            //   Indica el método en el que se recibirán los datos, se puede revisar 
                                            //   el 'proto' para ver los métodos disponibles
    }) .then( function( data ) {
        let html = '<ul>';                  // Crea un "Template"

        console .log( data );

        data .forEach( function( empleado ) {
            // Agrega los datos al Template
            html += `
                <li>${ empleado .nombre } - <b> ${ empleado .puesto } </b></li>
            `;
        });

        html += '</ul>';
        document .getElementById( 'resultado' ) .innerHTML = html;  // Coloca los datos obtenidos en el DOM

    }) .catch( function( error ) {          // Captura los ERRORES
        console .log( 'ERROR', error );
    });
}   