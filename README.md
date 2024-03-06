# INSTRUCCIONES
Como ejercicio final del módulo se debe crear un sitio web, podrá ser de una 
empresa ficticia o vuestro sitio como programadores web. La información no 
tiene por qué ser real.

Para la realización de esta maqueta deberéis utilizar: HTML5, CSS3, JavaScript y los plugins o librerías que necesitéis.

# ESPECIFICACIONES

## Debéis crear un sitio web que esté compuesto de:

### Una página de inicio, que se llamará: index.html. 
Esta página será la portada del sitio web y deberá contener un mínimo de cuatro secciones, siendo una de ellas dónde se carguen noticias desde un archivo externo. Es recomendable que el archivo externo sea un archivo JSON aunque también se dará por válido si se trata de un XML.

### Una página de galería, que se llamará: galeria.html. 
Esta página deberá incorporar una galería dinámica utilizando JavaScript o cualquier librería de JavaScript. También puedes utilizar un plugin que ya esté creado. 

### Una página de presupuesto, que se llamará: presupuesto.html. 
Esta página deberá contener un formulario que se divida en dos partes: 
- Datos de contacto: En esta primera parte del formulario se solicitarán los datos de contacto del usuario. Los datos de contacto se deberán validar utilizando JavaScript, para que cumplan con los siguientes criterios: 
-	Nombre: Sólo podrá contener letras y tendrá una longitud máxima de 15 caracteres. 
-	Apellidos: Sólo podrá contener letras y tendrá una longitud máxima de 40 caracteres. 
-	Teléfono de contacto: Sólo podrá contener números y tendrá una longitud máxima de 9 dígitos. 
-	Correo electrónico: Deberá cumplir con los estándares de un correo electrónico. Ejemplo: nnnnn_nnn@zzzzz.xxx
 
### Presupuesto (Segunda parte): 
En esta segunda parte del formulario se solicitará al usuario que elija entre varias opciones para calcular un presupuesto. 
Las opciones deberán ser:
- Producto: Deberás utilizar las etiquetas HTML pertinentes que permitan al usuario elegir entre varias opciones. Cada opción llevará un precio asociado. Deberás poner un mínimo de tres opciones.
- Plazo: Deberás utilizar una etiqueta HTML (input numérico) que permita al usuario indicar el número de meses o días en los que desea recibir el producto. Según el valor introducido se le aplicará un descuento sobre el presupuesto final.
- Extras: Deberás utilizar varias etiquetas HTML que permitan que el usuario marque todas las opciones extra que desea añadir al producto elegido. Cada opción seleccionada aumentará el presupuesto final en un importe determinado.
- Presupuesto: Deberás utilizar las etiquetas HTML pertinentes para mostrar al usuario el presupuesto final, basado en las elecciones que ha realizado. Este campo deberá actualizarse con cualquier cambio que se realice en las elecciones de producto, meses y extras, sin utilizar botones ni refrescar la página. 
- Condiciones y envío del presupuesto: En este apartado deberás utilizar una etiqueta HTML que te permita crear una opción para aceptar las condiciones de privacidad de la página y un botón que permita enviar el formulario. De forma adicional, podrás crear un botón que permita resetear el formulario. Recuerda que para poder enviar el formulario todos los campos deberán estar cumplimentados (incluido el de la aceptación de las condiciones) y deberán validar todos los datos del apartado de contacto.

### Una página de contacto que se llamará: contacto.html. 
En esta página deberás insertar un mapa dinámico, que marque la ubicación de tu negocio y calcule la ruta hasta la ubicación del cliente. Para ello podrás hacer uso de una API como la de Google Maps o OpenStreetMaps, así como de varias librerías de JavaScript. Además del mapa, deberás especificar los datos de contacto y ubicación de la empresa, la ubicación de estos queda a tu elección.

### Estilo y elementos obligatorios: 
El sitio deberá tener un estilo atractivo y actual. Puedes ayudarte de paletton para elegir los colores del sitio web, puedes seleccionar un color y su complementario o un máximo de tres colores además del blanco y negro. Recuerda que también puedes inspirarte en páginas reales para crearlo.


## Además, cada página del sitio deberá contener de forma obligatoria los siguientes elementos:
- Nombre de la página o logotipo: Deberá estar situado en la parte superior de las páginas o en la barra de navegación.
- Barra de navegación: Deberá estar situado en la parte superior de las páginas que componen el sitio web. Esta barra deberá resaltar mediante el uso de estilos CSS la página del menú en la que se encuentra el usuario dentro del sitio web y deberá acompañar al usuario en el scroll vertical. Es decir, aunque el usuario pueda realizar scroll vertical, la barra de navegación deberá mantenerse fija en la parte superior quedando siempre a la vista.
- Footer: El pie de página contendrá los logotipos de varias redes sociales, la dirección de la empresa y el aviso legal.

## Validación de las páginas HTML y apropiado uso de sus etiquetas y propiedades: 
El HTML de todas las páginas debe validar sin fallos ni advertencias. Recuerda que puedes comprobar que valide correctamente a través de: W3C Validator o instalando un complemento de validación en tu editor de código (cómo W3C Web Validator para Visual Studio Code).
Además, deberás utilizar correctamente las etiquetas HTML y sus propiedades para cada apartado. 
Estructura del proyecto y comentarios: 
El proyecto deberá estar organizado con una estructura de carpetas, como si se tratase de un proyecto real e incluir comentarios
