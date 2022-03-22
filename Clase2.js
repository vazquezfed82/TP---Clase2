const personas = [
    { id: 1, nombre: "fede", tipo: "humano", edad: 24},
    { id: 2, nombre: "nico", tipo: "humano", edad: 24},
    { id: 3, nombre: "fabi", tipo: "humano", edad: 24},
    { id: 4, nombre: "rocky", tipo: "perro", edad: 4},
  
]

console.log(personas) //Muestro todo el Array


const soloNombres = personas.map(persona => persona.nombre)
console.log(soloNombres) //Muestro solo los nombres de la

const filtroEspecie = personas.filter(persona => persona.tipo == "humano")
console.log(filtroEspecie) //Muestro solo una especie





const buscarPorId = () => {

    console.log("Ejecuto buscarporiD")
    const idBuscado = document.getElementById("busqueda").value;

    const usuario = personas.find(persona => persona.id == idBuscado);

    console.log(usuario);


}

