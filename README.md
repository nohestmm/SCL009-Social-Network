**HISTORIA DE USUARIO N°1**

Yo como usuaria de **NoMoreCommunity** QUIERO registrarme en la APP, mediante correo electrónico PARA poder usar la App

**Criterios de aceptación**
- Permitir al usuario registrarse mediante el ingreso de su alias, correo y contraseña, mediante un input  que capture el valor y lo envíe a firebase para guardar el registro. [Listo]
- Generar un msj de error si la contraseña es menor a 6 carácteres. [listo]
- Generar msj de error si alguno de los campos está vacío.[listo]
- Enviar correo al usuario de verificación de cuenta. [listo]

**HISTORIA DE USUARIO N°2**
Yo como usuaria de **NoMoreCommunity** QUIERO registrarme en la APP, mediante Google PARA poder usar la App

**Criterios de aceptación**
- Permitir al usuario registrarse con Google, mediante su respectivo botón de la interfaz.
- Permitir al usuario aceptar ó rechazar los permisos para compartir la información personal de Facebook / Google.


**HISTORIA DE USUARIO N° 3** 
YO como usuaria registrada en **NoMoreCommunity** QUIERO poder iniciar sesión mediante correo electrónico y contraseña PARA poder navegar en la misma.

**Criterios de aceptación**
- Permitir al usuario colocar el correo y contraseña, después validar si existe el usuario al clickear botón de LOGIN.
- Si el usuario no existe, enviar un alert que indique que no se encuentra registrado en la App.
- Si el usuario sí se encuentra registrado, permitir el ingreso mostrando el **muro general**.
- Si el usuario no recuerda su contraseña, enlace con la opción de recuperarla mediante envío de correo electrónico.

**HISTORIA DE USUARIO N° 4** 
YO como usuaria registrada en **NoMoreCommunity** QUIERO poder iniciar sesión mediante Google PARA poder navegar en la APP.

**Criterios de aceptación**
- Permitiar logearme en Google mediante un botón de la interfaz.

**HISTORIA DE USUARIO N° 5** 
YO como usuaria loggeada de **NoMoreCommunity** QUIERO poder publicar un post, editarlo o eliminarlo, PARA poder compartir con las demás usuarias de la comunidad.

**Criterios de aceptación**
- Permitir al usuario redactar un post mediante un input, con opción a publicarlo.
- Permitir al usuario editar un post *in place* y republicarlo.
- Permitir al usuario eliminar un post, previa confirmación con **Alert** . 
