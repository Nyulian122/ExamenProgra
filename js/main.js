import { lista_de_componentes } from "./data.js";

let root =  document.querySelector(".root");

lista_de_componentes.forEach(insano => {
    
root.innerHTML = `
    <div class="padre">
        <h3 class="titulo">Lorem</h3>
        <p class="texto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quo error nam recusandae, possimus velit, dolorum deserunt omnis cumque veritatis, culpa quaerat laboriosam? Quam voluptate maxime accusantium perferendis vero quae.</p>
        <div class="boton">boton</div>
    </div>
`;


});

lista_de_componentes();