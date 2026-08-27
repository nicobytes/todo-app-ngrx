# MyDayApp - Angular

MyDayApp es una aplicación para gestionar tareas de forma sencilla, fácil y en donde pondrás a pruebas tus conocimientos en Angular.

![preview](https://i.imgur.com/et5mmr7.png)

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Funcionalidades](#funcionalidades)
- [Pruebas](#pruebas)
- [Como enviar tu solución](#como-enviar-tu-solución)
- [Licencia](#licencia)
- [Credits](#credits)

## Instalación

1. Hacer el fork de este proyecto en tu espacio personal
1. Clonar el repositorio desde tu espacio personal en tu computadora
1. Instalar dependencias, con el comando `pnpm install`
1. Comprobar ambiente de desarrollo, con el comando `pnpm start`

---

### Instalación de ambiente para pruebas e2e

1. Instalar requerimientos para pruebas e2e, con el comando `pnpm run e2e:install`
1. Comprobar que se corran pruebas e2e, con el comando `pnpm run e2e`

## Configuración

El proyecto ya viene con una configuración inicial, la cual es la tipica usanda en projectos de Angular, esta lista para empezar a incorporar las funcionalidades.

```
├── README.md
├── angular.json
├── dist
├── e2e
├── karma.conf.js
├── node_modules
├── pnpm-lock.yaml
├── package.json
├── playwright.config.ts
├── src
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

### HTML Y CSS

Debes mantener el HTML con el mismo nombre de clases que se está empleando, el cual hace referencia a `src/styles.css`. El archivo `styles.css` NO debe editar.

> Si cambias el nombre de clases o estructura HTML probablemente las [pruebas e2e](#pruebas) van a fallar, ya que hace referencia específica a esos elementos con esas clases.

Inicialmente, hay un componente con el layout inicial en `src/app/pages/home/home.component.html` y tiene un ejemplo de como mostrar las tareas usando varios estilos de acuerdo a los estados:

```html
<ul class="todo-list">
  <li class="completed">
    <div class="view">
      <input class="toggle" type="checkbox" checked />
      <label>Learn JavaScript</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Learn JavaScript" />
  </li>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label>Buy a unicorn</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Buy a unicorn" />
  </li>
  <li class="editing">
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label>Make dishes</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Make dishes" />
  </li>
</ul>
```

Se verían de la siguiente manera:

![tasks](https://i.imgur.com/GiBhkwl.png)

> Realmente podrías resolver toda la lógica de la aplicación en un solo componente con su lógica en `src/app/pages/home/home.component.ts`, pero se espera dividas varias responsabilidades en componentes.

### Scripts

- El comando `pnpm run build` corre webpack en modo producción y deja los archivos de producción en la carpeta `/dist/myapp`.
- El comando `pnpm run e2e` corre las [pruebas e2e](#pruebas) usando [playwright](https://playwright.dev/).
- El comando `pnpm start` genera un servidor en modo desarrollo el cual tiene livereload.
- El comando `pnpm run start:prod` inicia un servidor usando `http-server` con la carpeta de `/dist/myapp` que es la carpeta en donde quedan los archivos para producción, recuerda antes de correr este comando asegurarte de correr `pnpm run build`.

## Funcionalidades

El modelo de datos recomendado para una tarea es:

- id: string
- title: string
- completed: boolen

Para crear una aplicación de tareas consistente y útil para los usuarios, la aplicación debe cumplir con la siguiente lista de 9 funcionalidades.

### 1. Ocultar las secciones main y footer

- Cuando no hay tareas, los elementos con ID `#main` y `#footer` deberían estar ocultos.

### 2. Crear una nueva tarea.

- Se debe crear una nueva tarea se debe usar el input principal de la aplicación.
- Este input debe enfocarse cuando se cargue la página, preferiblemente utilizando el atributo `autofocus` en el input.
- Al presionar la tecla Enter la tarea se crea con el estado **pending** y se agrega a la lista de tareas y el input debería quedar en limpio.
- Asegúrate de usar métodos como `.trim()` para limpiar espacios al inicio o al final y verifica que la tarea no sea un `string` vacío.

### 3. Una tarea

Una tarea debería tener 3 posibles interacciones:

1. Cuando se haga clic en el checkbox las tareas es marcada como **completed**, de igual manera si se vuele a hacer clic sobre en el checkbox vuelve a su estado de **pending**.
2. Si se hace doble clic en el  `<label>` se activa el modo edición.
3. Si se hace la acción `:hover` en una tarea se debería mostrar el botón para eliminar (`.destroy`).

### 4. Editando una tarea

- Cuando el modo edición está activado, se deberían ocultar los otros elementos y se mostrará un input que contiene el título de la tarea pendiente, que debe estar enfocado (`.focus()`).
- La edición debe guardarse cuando se presione la tecla Enter y salir del modo edición.
- Asegúrate de usar métodos como `.trim()` limpiar espacios al inicio o al final.
- Si se presiona la tecla Escape durante la edición, se debe salir del modo edición y descartar cualquier cambio.

### 5. Contador

- En el footer se debería mostrar el número de tareas en estado **pending**.
- Asegúrese de que el número esté envuelto por una etiqueta `<strong>`.
- También asegúrese de pluralizar la palabra `item` correctamente, por ejemplo: `0 items`, `1 item`, `2 items`.

### 6. Botón de limpiar

- Debería existir un botón para eliminar todas las tareas que están con estado de **completed**.

### 7. Persistencia

- Cuando se recargue la aplicación se debe obtener las tareas, para esto tu aplicación debería guardar las tareas en LocalStorage.
- El key que se debe usar para el LocalStorage debe ser `mydayapp-angular`, esto es importante ya que las [pruebas e2e](#pruebas) van a verificar el LocalStorage con esta la key `mydayapp-angular`.
- NO es necesario persistir estados de la interfaz como por ejemplo guardar el modo de edición. Solo se debe guardar las tareas.

### 8. Filtros y rutas

Deben existir tres filtros que funcione desde la URL y funcionan como links en el footer:

- `/all`: Muestra todas las tareas tanto las que están en estado de **completed** y **pending**.
- `/pending`: Muestra todas las tareas en estado **pending**.
- `/completed`: Muestra todas las tareas en estado **completed**.

### 9. Deployment

Desplegar la aplicación en alguno de los siguientes servicios: GitHub Pages, Netlify, Vercel, Firebase Hosting.

## Pruebas

Las pruebas e2e corren bajo playwright con el comando `pnpm run e2e` y ya esta incluido como parte de las dependencias del proyecto, sin embargo, antes de correr el comando, asegúrate de correr `pnpm run e2e:install` para instalar los requerimientos de playwright para correr pruebas.

Cuando corras el comando `pnpm run e2e` por primera vez y antes de crear todas las [funcionalidades](#funcionalidades), las pruebas van a fallar y se verán así:

![failed](https://i.imgur.com/C0jGlXl.png)

Una vez desarrolles todas las funcionalidades deberías pasar todas las pruebas y se verán así:

![success](https://i.imgur.com/3wL4dO2.png)

> Puedes ir corriendo el comando `pnpm run e2e` de las funcionalidades que vayas creando para ir evaluando que vas por buen camino.

## Licencia

Este proyecto se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Credits

- [TodoMVC Project](https://todomvc.com/)
- [MyDayApp - JavaScript](https://github.com/platzi/laboratorio-mydayapp-js)
