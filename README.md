#  Curso de Asincionismo con JavaScript

### Conceptos

**JavaScript:** Es un lenguaje de programacion asincrono y no bloqueante con un manejador de evento más conocido como el *Event Loop* implementado en un unico hilo para sus interfaces de entrada y de salida.

**JavaScript Runtime:** Es aquel entorno que permite a JavaScript trabaje de forma rapida, eliminado asi el tiempo de espera para que la ejecucion de ciertas funciones sean cumplidas, siendo delegadas a otros procesos que internamente estan contenidos en el JavaScript Runtime, permitiendo asi el engine (el motor de java script) no se detenga. **"Esta es la responsable de hacer que JavaScript sea asincrono y no bloqueante"**

![Bloqueante.png](https://github.com/DiegoRojas93/Asincronismo/blob/Asincronismo/images/Bloqueante.png)
![Sincrono_Asincrono.png](https://github.com/DiegoRojas93/Asincronismo/blob/Asincronismo/images/Sincrono_Asincrono.png)

**API:** Es una interfaz de programación de aplicaciones (del inglés API: Application Programming Interface).

En simples palabras nos permite consumir contenido de internet, como los personajes de la serie animada o también hay APIs preparadas para guardar información, actualizar o eliminar (CRUD).

----

### Asincronismo

JavaScript por default siempre corre una tarea a la vez a esto se le llama ***Sincronismo.***

Dentro del entorno del runtime el avegador nos ofrece cierqas API's y funcionalidades que permite recibir aquellas funciones que no le corresponden  trabajar al Call Stack y que solamente puede trabajar ellas mismas.

Cuando las web API's termina de realizar las tares, las deja ya listas en el Callback Queue (cola de mensaje) para que cuando el Call Stack se acabe, ***Event Loop*** se de cuenta de ello y ponga todas las funciones del callback queue al Call Stack

![1.png](https://github.com/DiegoRojas93/Asincronismo/blob/Asincronismo/images/1.png)