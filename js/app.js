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
    fetch( 'datos.txt' )                                                            // Se conecta a los datos
        .then( response => response .text() )                                       // Recibe la respuesta     
        .then( data => document .getElementById( 'resultado' ) .innerHTML = data )  // Coloca los datos obtenidos en el DOM
        .catch( error => console .log( 'ERROR', error ) );                          // Captura los ERRORES
}

// Function carga datos del archivo datos.txt
function cargarJSON() {
    // FetchAPI usando Promises
    fetch( 'empleados.json' )                                                       // Se conecta a los datos
        .then( response => response .json() )                                       // Recibe la respuesta
        .then( data => {                                                            // Coloca los datos obtenidos en el DOM
            let html = '<ul>';                                                      // Crea un "Template"

            console .log( data );

            // Recorre el 'Array' de objetos empleado
            data .forEach( empleado => {
                // Agrega los datos al Template
                html += `
                    <li>${ empleado .nombre } - <b> ${ empleado .puesto } </b></li>
                `;
            });

            html += '</ul>';
            document .getElementById( 'resultado' ) .innerHTML = html;              // Coloca los datos obtenidos en el DOM

        }) .catch( error => console .log( 'ERROR', error ) );                       // Captura los ERRORES
}   

// Function carga datos del archivo datos.txt
function cargarREST() {
    // FetchAPI usando Promises
    fetch( 'http://picsum.photos/list' )                                            // Se conecta a los datos
       .then( response => response .json() )                                        // Recibe la respuesta
       .then( imagenes => {                                                         // Recibe los datos en el formato del método indicado anteriormente
            let html = '<ul>';                                                      // Crea un "Template"

            console .log( imagenes );

            // Recorre el 'Array' de objetos de imagenes
            imagenes .forEach( imagen => {
                // Agrega los datos al Template
                html += `
                <li style="list-style-type: none;">
                        <b>Autor:</b> ${ imagen .author } <br />
                        <a target="_blank" href="${ imagen .post_url }">Ver Imagen</a> 
                </li>
                `;
            });

            html += '</ul>';
            document .getElementById( 'resultado' ) .innerHTML = html;              // Coloca los datos obtenidos en el DOM

        }) .catch( error => console .log( 'ERROR', error ) );                       // Captura los ERRORES
}