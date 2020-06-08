/*-------------Peticiones a API's usando Callbacks------------- */

/* Para este caso vamos a consumir la API  de Rick and Morty, la cual nos va a permitir traer los personajes y usando los callbacks permitiendonos saber el planeta de cada personaje*/

/*------------------------------------------------------------- */

//XMLHttpRequest es un objeto de JS que nos permite hacer peticiones a servicios en la nube

//Guardamos en una variable el requerimiento de node xmlhttprequest
let XMLHtmlRequest = require ('xmlhttprequest').XMLHttpRequest;
let API = `https://rickandmortyapi.com/api/character/`;

// Aqui, crearemos una función que traiga la informacion desde la API que queramos utilizar
function fetchData(url_api, callBack) {

  // Se genera una instancia al objeto que se necesita
  let xhttp = new XMLHtmlRequest();

  /* SE HACE EL LLAMADO A LA URL */
  /*xhttp.open (metodo, url de la api, ¡va ha menejar de forma asincronoa?) */
  xhttp.open('GET', url_api, true);

  // Escuchar el cambio de estado durante el envio de peticion
  xhttp.onreadystatechange = function (event) {
    /* Se dara la validación para que se ejecute el Callback */

    // Validar la finalizacion del stado es igual a 4 lo que significa que se ha completado
    if (xhttp.readyState === 4) {
      // validar el stado es igual a 200 significA que todo esta "OK"
      if (xhttp.status === 200) {
        //ejecutar el callback para persear el string resultante a json

        //*El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
        callBack(null, JSON.parse(xhttp.responseText))
      }else{
        // Si no se cumple las condiciones del if entonces retornara el error callback
        const error =new Error ('Error' + url_api)
        return callBack(error, null)
      }
    }
  }

  // Se envia la solicitud
  xhttp.send();
}

/* --------------------------Callback-------------------------- */

fetchData(API, function (error1, data1 ) {
  if(error1) return console.error(error1);
  fetchData(API +data1.results[0].id, function (error2, data2) {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if(error3) return console.error(error3)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
})