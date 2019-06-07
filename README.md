**HISTORIA DE USUARIO N°1**

Yo como usuaria de **NoMoreCommunity** QUIERO registrarme en la APP, mediante correo electrónico PARA poder usar la App

**Criterios de aceptación**
- Permitir al usuario registrarse mediante el ingreso de su alias, correo y contraseña, mediante un input  que capture el valor y lo envíe a firebase para guardar el registro. [Listo]
- Generar un msj de error si la contraseña es menor a 6 carácteres. [listo]
- Generar msj de error si alguno de los campos está vacío.[listo]
- Enviar correo al usuario de verificación de cuenta. [listo]
- Permitir que SÓLO ingresen a través del hash, los usuarios registrados. [listo]

**HISTORIA DE USUARIO N°2**
Yo como usuaria de **NoMoreCommunity** QUIERO poder restablecer mi contraseña, para usar la APP si la olvidé.

**Criterios de aceptación**
- Permitir al usuario restablecer su contraseña mediante un input que reciba su correo electrónico, y luego envíe el enlace de restablecimiento de la misma.[listo]
- Permitir volver a la pantalla de inicio.[listo]
- Validar que no existan campos vacíos [listo]


**HISTORIA DE USUARIO N° 3** 
YO como usuaria registrada en **NoMoreCommunity** QUIERO poder iniciar sesión mediante correo electrónico y contraseña PARA poder navegar en la misma.

**Criterios de aceptación**
- Permitir al usuario colocar el correo y contraseña, después validar si existe el usuario al clickear botón de LOGIN. [listo]
- Si el usuario no existe, enviar un mensaje que indique que no se encuentra registrado en la App. [listo]
- Si el usuario sí se encuentra registrado, permitir el ingreso mostrando el **muro general**.[listo]
- Si el usuario no recuerda su contraseña, enlace con la opción de recuperarla mediante envío de correo electrónico. [listo]

**HISTORIA DE USUARIO N° 4** 
YO como usuaria registrada en **NoMoreCommunity** QUIERO poder iniciar sesión mediante Google PARA poder navegar en la APP.

**Criterios de aceptación**
- Permitiar logearme en Google mediante un botón de la interfaz. [listo]

**HISTORIA DE USUARIO N° 5**
Yo como usuario loggeado de NoMoreCommunity, QUIERO poder cerrar sesión de mi cuenta PARA poder salir de la APP.
**Criterios de aceptación**
- Botón que cierre sesión y muestre la pantalla principal, con mensaje de despedida. [listo]

**HISTORIA DE USUARIO N° 6**
Yo como usuario de NoMoreCommunity, QUIERO que la APP me informe si tengo algún campo con error PARA poder verificar que lo que escribo es correcto en la APP.
**Criterios de aceptación**
- Mostrar al usuario los respectivos mensajes de error con los casos que se puedan presentar, campos vacíos, usuarios no registrados, etcétera. [listo]

**HISTORIA DE USUARIO N° 7** 
YO como usuaria loggeada de **NoMoreCommunity** QUIERO poder publicar un post, editarlo o eliminarlo, PARA poder compartir con las demás usuarias de la comunidad.

**Criterios de aceptación**
- Permitir al usuario redactar un post mediante un input, con opción a publicarlo.
- Permitir al usuario editar un post *in place* y republicarlo.
- Permitir al usuario eliminar un post, previa confirmación con **Alert** . 


