const slides = [
  
  `<h2>Historia y evolucion  </h2>
   <p> gattooooo </p>`,

  `<h2>Cambios en el comportamiento del usuario </h2>
   <p >pepe goku alonso </p>`,
 
  `<h2>Errores y aprendizajes del usuario </h2>

<p> ""
  </p>`,

   

  `<h2>Retos de diseño centrado en el ser humano</h2>
   <ul>
    ""
   </ul>`,

  `<h2>Disciplinas que aportan a su rama
 </h2>
   <p> ""
</p>`,

  `<h2>trabajo multidisciplinario real </h2>
   <p> ""
</p>`,

  `<h2>Conexion con el libro de Alan Dix </h2>
     <p>""
</p>`,

`<h2>Proyeccion a futura </h2>
     <p>""
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



