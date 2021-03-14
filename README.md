# Corebiz AR Prueba técnica

App de ecommerce en base al diseño provisto a través de Figma

### Primera parte

* Productos obtenidos desde la API
* App posee un contexto para guardar la cantidad de productos que se agregan al carrito de compras
* Esta cantidad aumenta a través de los botones "Comprar" que están en cada producto
* Además de el state global, son guardados en localstorage para mantener la cantidad de productos al actualizar y/o salir de la página
* Desde el menu de navegación se obtiene dicha cantidad desde el contexto para actualizar en tiempo real el número que se muestra

### Segunda parte

* Para el formulario de newsletter se realizan las vacidaciones de si el nombre/email están vacios y si el email ingresado es válido o no
* Si la información ingresada por el usuario es correcta, al hacer click en el botón del formulario se realiza un POST a la API
* Al ser correcto el POST se muestra un mesanje de éxito

### Instalación 🔧

_Instalar las dependencias_

```
npm install
```

_Ejectuar la aplicacion_

```
npm start
```

## Construido con 🛠️

* HTML, CSS
* ReactJS
* Webpack - Babel
