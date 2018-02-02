/* Fetch API (Tecnología para realizar peticiones que desplazó a AJAX) */

// Evento 'click' para el elemento del botón "CARGAR TXT"
document .getElementById( 'txtBtn' ) .addEventListener( 'click', cargarTXT );    

// Evento 'click' para el elemento del botón "CARGAR JSON"
document .getElementById( 'jsonBtn' ) .addEventListener( 'click', cargarJSON );

// Evento 'click' para el elemento del botón "CARGAR API"
document .getElementById( 'apiBTN' ) .addEventListener( 'click', cargarREST );

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

        // Recorre el 'Array' de objetos empleado
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

// Function carga datos del archivo datos.txt
function cargarREST() {
    // FetchAPI usando Promises
    fetch( 'http://picsum.photos/list' )    // Se conecta a los datos
       .then( function( response ) {        // Recibe la respuesta
        console .log( 'Respuesta', response );

        return response .json();            // Promise: 
                                            //   Indica el método en el que se recibirán los datos, se puede revisar 
                                            //   el 'proto' para ver los métodos disponibles

    }) .then( function( imagenes ) {        // Recibe los datos en el formato del método indicado anteriormente
        let html = '<ul>';                  // Crea un "Template"

        console .log( imagenes );

        // Recorre el 'Array' de objetos de imagenes
        imagenes .forEach( function( imagen ) {
            // Agrega los datos al Template
            html += `
               <li style="list-style-type: none;">
                    <b>Autor:</b> ${ imagen .author } <br />
                    <a target="_blank" href="${ imagen .post_url }">Ver Imagen</a> 
               </li>
            `;
        });

        html += '</ul>';
        document .getElementById( 'resultado' ) .innerHTML = html;  // Coloca los datos obtenidos en el DOM



    }) .catch( function( error ) {          // Captura los ERRORES
        console .log( 'ERROR', error );
    });
}