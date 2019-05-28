
**HISTORIA DE USUARIO N° 1** 
YO como usuaria de **NoMoreCommunity** QUIERO crear una cuenta en la APP, PARA poder ingresar a la comunidad de manera segura.

**Criterios de aceptación**
- Permitir al usuario registrarse, mediante el ingreso del alias, nombre y apellido (sólo admin), correo y la contraseña mediante un input  que capture el valor y lo envíe a firebase para guardar el registro.
- Generar un msj de error si la contraseña es menor a 6 carácteres, espacios en blancos, restricción de caractéres especiales.
- Generar msj de error si alguno de los campos está vacío.
- Generar msj error si el alias ya existe.
- Enviar correo informando la creación de la cuenta en  **NoMoreCommunity**.
- Permitir al usuario loguearse con Facebook / Google, mediante su respectivo botón de la interfaz.
- Permitir al usuario aceptar ó rechazar los permisos para compartir la información personal de Facebook / Google.
- Permitir al usuario crearse un alias ó usar los datos exportados de Facebook / Google, y generar msj de error si el alias ya existe.


**HISTORIA DE USUARIO N° 2** 
YO como usuaria registrada en **NoMoreCommunity** QUIERO poder iniciar sesión en la App PARA poder navegar en la misma.

**Criterios de aceptación**
- Permitir al usuario colocar el correo y contraseña, después validar si existe el usuario al clickear botón de LOGIN.
- Si el usuario no existe, enviar un alert / modal / innerText que indique que no se encuentra registrado en la App.
- Si el usuario sí se encuentra registrado, permitir el ingreso mostrando el **muro general**.
- Si el usuario no recuerda su contraseña, opción de recuperarla mediante envío de correo electrónico.

**HISTORIA DE USUARIO N° 3** 
YO como usuaria loggeada de **NoMoreCommunity** QUIERO poder publicar un post, editarlo o eliminarlo, PARA poder compartir con las demás usuarias de la comunidad.

**Criterios de aceptación**
- Permitir al usuario redactar un post mediante un input, con opción a publicarlo.
- Permitir al usuario editar un post *in place* y republicarlo.
- Permitir al usuario eliminar un post, previa confirmación con **Alert** . 
