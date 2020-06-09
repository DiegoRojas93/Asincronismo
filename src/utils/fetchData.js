/*-------------Peticiones a API's usando Callbacks------------- */

/* Para este caso vamos a consumir la API  de Rick and Morty, la cual nos va a permitir traer los personajes y usando los callbacks permitiendonos saber el planeta de cada personaje*/

/*------------------------------------------------------------- */

//XMLHttpRequest es un objeto de JS que nos permite hacer peticiones a servicios en la nube

//Guardamos en una variable el requerimiento de node xmlhttprequest
let XMLHtmlRequest = require ('xmlhttprequest').XMLHttpRequest;


// Aqui, crearemos una función que traiga la informacion desde la API que queramos utilizar
const fetchData = (url_api) => {

  return new Promise ((resolve, reject) =>{

    // Se genera una instancia al objeto que se necesita
    const xhttp = new XMLHtmlRequest();

    /* SE HACE EL LLAMADO A LA URL */
    /*xhttp.open (metodo, url de la api, ¡va ha menejar de forma asincronoa?) */
    xhttp.open('GET', url_api, true);

    // Escuchar el cambio de estado durante el envio de peticion
    xhttp.onreadystatechange =(() =>  {
      /* Se dara la validación para que se ejecute el Callback */

      // Validar la finalizacion del stado es igual a 4 lo que significa que se ha completado
      if (xhttp.readyState === 4) {
        // validar el stado es igual a 200 significA que todo esta "OK"

        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error (`Error `, url_api))
      }
    })
    // Se envia la solicitud
    xhttp.send();
  })
}

module.exports = fetchData;