function solicitarDatos() {
    const personas = [];
    const continuar = true;

    const numPersonas = prompt("¿Cuántas personas deseas registrar?");

    for (let i = 0; i < numPersonas; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
        const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));

        personas.push([nombre, edad, nota]);
    }

    console.log("\nLista de personas ingresadas:");
    mostrarLista(personas);

    const personasOrdenadas = [...personas];
    personasOrdenadas.sort((a, b) => b[2] - a[2]);

    console.log("\nLista ordenada por nota (de mayor a menor):");
    mostrarLista(personasOrdenadas);
}

function mostrarLista(lista) {
    lista.forEach((persona, index) => {
        console.log(`Persona ${index + 1}: Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
    });
}

solicitarDatos();

console.log("Programa finalizado con exito")