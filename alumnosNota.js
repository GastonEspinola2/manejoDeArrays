// Solicitamos la entrada de datos del usuario
function solicitarDatos() {
    const personas = [];
    const continuar = true;

    //Preguntamos cuantas personas se quieren registrar
    const numPersonas = prompt("¿Cuántas personas deseas registrar?");

    // Bucle para ingresar los datos de cada persona
    for (let i = 0; i < numPersonas; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
        const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));

        // Almacenamos los datos de cada persona en un arreglo
        personas.push([nombre, edad, nota]);
    }

    // Mostrar la lista de personas tal como se ingresaron
    console.log("\nLista de personas ingresadas:");
    mostrarLista(personas);

    // Ordenar la lista por la nota de mayor a menor
    const personasOrdenadas = [...personas]; // Crear una copia para no modificar la lista original
    personasOrdenadas.sort((a, b) => b[2] - a[2]);

    // Mostrar la lista ordenada por nota
    console.log("\nLista ordenada por nota (de mayor a menor):");
    mostrarLista(personasOrdenadas);
}

// Función para mostrar la lista de personas
function mostrarLista(lista) {
    lista.forEach((persona, index) => {
        console.log(`Persona ${index + 1}: Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
    });
}

// Iniciar el proceso de ingresar y mostrar datos
solicitarDatos();

console.log("Programa finalizado con exito")