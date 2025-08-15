const slides = [
  
   `<h2>Historia y evolucion tecnologica </h2>
   <p>En sus inicios en os sistemas la seguridad se limitaba a contraseñas simples y entornos donde 
   solo algunas personas podian interactuar con esta. algo como las interfaces basicas y poco amigables con el usuario
   las cuales eran pensadas para expertos ademas de algunas interfaces servian solo escribiendo comandos.


   Con la aparicion de las interfaces y el desarrollo tecnologico el usar un computador se volvio muy util y simple 
   lo que se muestra gracias a que su uso se volvio global casi para cualquier persona y con el pasar del tiempo se mejoro la interaccion
   con los usuarios.

   Aumento la seguridad sobre los datos de las personas que quieran almacenar en un sistema informatico
   donde las personas interactuan diariamente 
   </p>`,

  `<h2>Cambios en el comportamiento del usuario  </h2>
   <p >Con el paso del tiempo, la tecnología en ingeniería de sistemas ha cambiado por completo la forma en que la gente se relaciona con los computadores.
   Hoy todo es más sencillo y automático, lo que ha hecho que incluso quienes no son expertos puedan usar la tecnología sin dificultad. Esto ha traído  beneficios: 
   tareas más rápidas, accesibles y prácticas para el día a día.
   
   Ademas de esto muchas personas pueden llegar a descuidar sus datos y hacen que sus credenciales sean de facil acceso para algunos terceros 
   con intenciones maliciosas</p>`,
 
  `<h2>Errores y aprendizajes del usuario </h2>

<p> Los fallos de seguridad en los usuarios son resultado de limitaciones mentales como la memoria y la concentración. Por lo tanto, el papel de las personas es clave en la protección de los sistemas.
Por ejemplo, los usuarios optan por contraseñas poco seguras porque son más fáciles de recordar, o pasan por alto las alertas de seguridad en los sitios web.
  </p>`,

   

  `<h2>Retos de diseño centrado en el ser humano</h2>
   <ul>
  El diseño en la actualidad tiene como objetivo desarrollar sistemas que sean flexibles, seguros y sencillos de utilizar, con un énfasis en la experiencia del usuario. Las dificultades más importantes son controlar la carga mental para prevenir la sobrecarga de información, crear diseños que se adapten a diferentes habilidades y garantizar que los usuarios tengan un método sencillo para resguardar su información personal.
   </ul>`,

  `<h2>Disciplinas que aportan a su rama
 </h2>
   <p> Ramas como lo son:
   Psicologia,Eragnomia,Diseño,Sociologia,estadistica han ayudaso a el desarrollo d ela tecologia como se la conoce hoy en dia
   Ademas de estas ramas tambien se puede obtener mejoras y ayuda de ramas como lo son las ingenierias las cuales optimisan el funcionamiento de un sistema</p>`,

  `<h2>trabajo multidisciplinario real </h2>
   <p> 
Un ejemplo de trabajo multidisciplinario es el desarrollo de cajeros automáticos modernos. 
En su creación participan ingenieros de sistemas para la programación y seguridad, diseñadores gráficos para la interfaz visual, psicólogos para entender cómo el usuario interactúa con las opciones, expertos en ergonomía para definir la altura y disposición de elementos, y especialistas en comunicación para asegurar que la conexión con el banco sea rápida y segura. 
Gracias a esta colaboración, hoy los cajeros son más fáciles de usar, seguros y accesibles para todo tipo de usuarios.

Otro ejemplo seria el desarrollo de el computador en la cual tuvo que existir relacion y comunicacion entre ingenieros, psiocologos,expertos en ergonomia entre otros para que hoy en dia 
toda persona tenga un uso practico y eficiente 
</p>`,

  `<h2>Conexion con el libro de Alan Dix </h2>
     <p>
Vulnerabilidad de los dispositivos: Los teclados y sensores (como los input devices) son puntos de entrada que pueden introducir inseguridad en un sistema.
Riesgo humano: La inseguridad no solo viene de los dispositivos, sino también de los usuarios. Un ejemplo es el método de ataque "mirar por encima del hombro" (shoulder surfing), que compromete contraseñas en lugares públicos.
Importancia del Feedback Claro: Los sistemas de seguridad deben ofrecer una retroalimentación clara y visible al usuario. Una mala retroalimentación hace que se ignoren alertas importantes.
Ejemplo: El ícono del candado en las páginas web HTTPS es un tipo de feedback visual que confirma una conexión segura y ayuda a prevenir ataques de phishing.
</p>`,

`<h2>Proyeccion a futuro </h2>
     <p>
Sin credenciales constantes: El sistema te reconoce por tus hábitos (escritura, movimiento, voz).
Seguridad invisible: Cifrado y verificaciones que se ejecutan sin que lo notes.
Sensores avanzados: Se usa inteligencia artificial para detectar comportamientos inusuales y prevenir intrusiones en tiempo real.

Beneficios y Desafíos
Seguridad fluida: Deja de ser un obstáculo y se integra en la experiencia del usuario.
Protección automática: El sistema se adapta al entorno para ajustar el nivel de seguridad.
Debate pendiente: Esta tecnología plantea importantes discusiones sobre la privacidad y el control de datos.
</p>`,

];

let indice = 0;
const slideEl = document.getElementById('slide');

function mostrar(i) {
  slideEl.innerHTML = slides[i];
}

document.getElementById('next').addEventListener('click', () => {
  indice = (indice + 1) % slides.length;
  mostrar(indice);
});

document.getElementById('prev').addEventListener('click', () => {
  indice = (indice - 1 + slides.length) % slides.length;
  mostrar(indice);
});


mostrar(indice);







