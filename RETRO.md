# Sprint 1
Se trabajó de buena manera pero se puede mejorar la dinámica del grupo:
- Mejorar la comunicación.
- No pudimos nunca estar los 5 en una reunión virtual.
- Aumentar el uso de plataforma Trello.

Para destacar:
- El apoyo entre los compañeros.
- La toma de decisiones consensuada.  


 # Sprint 2 
- Se realizaron las vistas mediante html con sus respectivos estilos (css).
- Se trabajo en equipo  dividiendo las tareas por vista y una vez       terminadas se ensalmblaron para dejarlas lo mas armonico posible.

Para corregir:
-Siguen habiendo problemas para reunirnos todos lo integrantes del grupo, lo que nos impide una mejor y mas rapida resolucion a los problemas que se nos presentan.

# SPRINT 3
Mejoras:
-La comunicacion en el equipo
-Mas uso de la plataforma Trello
-Apoyo a los compañeros en sus respectivas actividades
-Se agregaron mas dias de reunion
-Pudimos estar todos los miembros del equipo en las reuniones 


Para mejorar:
-Integrar al nuevo compañero del equipo
-Dividir mejor las actividades
-Determinar los tiempos de cada actvidad


# Sprint 4

Se trabajo en los items marcados en la devolucion del sprint anterior:
- Se ordenaron las vistas, parcials, rutas y controladores en la carpeta src.
- Se implemento el uso de la columna "en proceso" dentro del trello.
- Se unifico la retrospectiva de los diferentes sprints en un solo archivo.
- Pudimos contar en este nuevo sprint con la gran ayuda de Jorge Gorostegui que se sumo en esta etapa al grupo.
- Realizamos el CRUD de productos, atraves del cual podemos crear leer editar y borrar un producto determinado.

A corregir:

Utilizar con mas frecuencia el trello para reflejar el desarrollo de las distintas actividades realizadas por cada integrante del grupo.

# Sprint 5

 - Se agregaron las rutas y validaciones para registro de administradores y compradores. También las rutas de login.

## DEVOLUCIONES Y CORRECCIONES DEL SPRINT ANTERIOR
 - En la BD JSON de productos, les quedaron productos con talles numéricos y otros con letras que describe un tipo de talle. Les recomiendo no tener dos propiedades distintas para imagenes. En una tienen un array de imagenes y en otra una sola, pero podrían usar la primera imagen del array.
RESPUESTA: en el tema de las talles lo hicimos así, ya que si son zapatillas son numéricos, si es ropa para chico los talles suelen ser numéricos y por edades, 8,10,12,14 etc, y si es ropa para adulto por lo general es S ,M, L, ,X, XL...

- En la BD JSON de usuarios, le recomiendo agregar un campo que describa que tipo de usuario es (admin, regular, etc...)
RESPUESTA: Definimos el tipo de usuario Admin como booleano. De esta manera, se habilitan las secciones de admin en caso de que sea True. El admin puede cargar productos, editarlos y borrarlos.

- En la vista de carga de un producto, figuran los botones crear editar y eliminar. En el formulario de creación, no están bien aplicados los labels ya que si aprieto el mismo no ingresa o selecciona el input 
(recuerden que el atributo for apunta al id y no al name). Falta implementar multer para la carga de imágenes.
 RESPUESTA: Se eliminaron botones que sobraban y los que quedaron se corregió la funcionalidad.

- La eliminación de un producto, no funciona.
RESPUESTA: YA FUNCIONA.

- Oportunidad de mejora: segir trabajando para una mayor comunicacion y mas uso de la herramienta TRELLO. 

### usuario administrador
- usuario: pepe@pepe.com
- pass: 123

Con este usuaria van a poder editar, borrar y dar de alta productos.

# Sprint 6

Se creo el diagrama de base de datos, Script de creación de estructura, la carpeta Sequelize y el CRUD

## DEVOLUCIONES Y CORRECCIONES DEL SPRINT ANTERIOR

Se corrigio la funionaliad tanto en la vista como administrador como el input del registro.

Para mejorar:

Organizar mejor las tareas para finalizar el Sprint con tiempo

Juntarse con mas frecuencia

Corregir errores en el funcionamiento de la pagina 


