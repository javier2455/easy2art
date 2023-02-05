# Catalogue v1.0.4

## Cambios 05/02/2023
- Agregado la página de error 404.

## Cambios 04/02/2023
- Ya funciona el formulario de contacto.
- Se creo un componente `ContactForm` con el que se extrajo la parte visual del formulario. 
- Se configuro el servicio para reenviarle un correo al remitente.
- Se añadio la deshabilitación del botón del formulario de contacto mientras se envia el correo.

- **Se Trabaja en**
* Hacer un mensaje para mostrarle al usuario la confirmación de que su correo se envió.

## Cambios 03/02/2023
- Se agregaron los enlaces a las redes sociales, se quito Telegram de forma momentanea.

## Cambios 02/02/2023
- Se crea un nuevo componente `SearchWorks` que sustituye a SideBar en la vista `Works`, ahora la busqueda por categoría ocupa menos espacio y es mas simple.
- Se modifica el archivo `Works.jsx` para que utilize el nuevo componente.
- La Navegación ahora pasa a ser `Link` en vez de `NavLink` para evitar el error que se quedaba marcado la vista anterior.
- Se cambiaron los texto que conteian "lorem ipsum" por contenido acorde al sitio.

- **Se Trabaja en**
* Buscar una mejor distribución a las imagenes en la vista de `Works` (Por hacer)
* Hacer los enlaces a las redes Sociales en la vista `Home`. (Echo)
* Hacer funcional el formulario de Contactenos, recibir un correo y enviarle otro al usuario con la informacion de que se recibio el que nos envia por ahora. (Echo parcialmente).

## Cambios 24/01/2023
- Se cambiaron las rutas de `App.jsx`, `constants`, `CompanyWorks` y `Intro` a las que nos brinda GithubPages para el hosting. 

## Por hacer
- https://github.com/gitname/react-gh-pages Documentación
- https://github.com/javier2455/easyart.github.io Repo donde se creo
- npm install gh-pages --save-dev comando a ejecutar

## Working in
- Construir el formulario para crear un Pin. (echo)
- Estilizar el input tipo file con tailwindcss. (echo)
- Crear el componente `Intro` de la vista `Home`. (echo)
- Hacer la vista HOME de la aplicación.
- Arreglar la base de datos con los nuevos campos especificados.
- Agregar los nuevos campos al formulario.
- Hacer el componente para mostrar mensajes. 
- Hacer el componente del Loader.
- Hacer el enrutado de la aplicación.
- Terminar el CRUD de los Pins.
- Hacer el dashboard para la administración.
- Hacer la vista para mostrar los pines por categorias.
- Hacer el Sidebar para las categorias de pins.
- Hacer el buscador de categorias y pins.

## Funcionalidades a futuro
- Implementar un componente que muestre las ultimos tres pines mas recientes
- Implementar un buscador.
- Validaciones del formulario.
