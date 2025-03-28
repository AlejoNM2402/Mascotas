let pets = [];

// Función asíncrona para registrar mascota con retraso
function registrarMascotaConRetraso(mascota) {
    return new Promise((resolve, reject) => {
        // Simular un retraso de 2 segundos
        setTimeout(() => {
            try {
                // Validaciones básicas
                if (!mascota.nombre || !mascota.especie) {
                    throw new Error("Nombre y especie son obligatorios");
                }

                // Verificar si la mascota ya existe
                const mascotaExistente = pets.find(
                    p => p.nombre.toLowerCase() === mascota.nombre.toLowerCase()
                );

                if (mascotaExistente) {
                    throw new Error(`Ya existe una mascota con el nombre ${mascota.nombre}`);
                }

                // Agregar la mascota
                pets.push(mascota);
                
                resolve({
                    mensaje: `Mascota ${mascota.nombre} registrada exitosamente.`,
                    mascota: mascota
                });
            } catch (error) {
                reject(error);
            }
        }, 2000); // 2 segundos de retraso
    });
}

// Función asíncrona para buscar mascota con retardo
function buscarMascotaConRetardo(nombre) {
    return new Promise((resolve, reject) => {
        // Simular un retraso de 1.5 segundos
        setTimeout(() => {
            const mascotaEncontrada = pets.find(
                mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase()
            );

            if (mascotaEncontrada) {
                resolve({
                    mensaje: "Mascota encontrada.",
                    mascota: mascotaEncontrada
                });
            } else {
                reject(new Error(`No se encontró ninguna mascota con el nombre ${nombre}`));
            }
        }, 1500); // 1.5 segundos de retraso
    });
}

// Función asíncrona para actualizar estado de salud con espera
function actualizarEstadoSaludConEspera(nombre, nuevoEstadoSalud) {
    return new Promise((resolve, reject) => {
        // Simular un retraso de 2.5 segundos
        setTimeout(() => {
            try {
                // Validar estado de salud
                const estadosValidos = ['sano', 'enfermo', 'en tratamiento'];
                if (!estadosValidos.includes(nuevoEstadoSalud.toLowerCase())) {
                    throw new Error("Estado de salud inválido");
                }

                // Encontrar el índice de la mascota
                const mascotaIndex = pets.findIndex(
                    mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase()
                );

                if (mascotaIndex === -1) {
                    throw new Error(`No se encontró ninguna mascota con el nombre ${nombre}`);
                }

                // Actualizar estado de salud
                pets[mascotaIndex].estadoSalud = nuevoEstadoSalud.toLowerCase();

                resolve({
                    mensaje: `Estado de salud de ${nombre} actualizado exitosamente.`,
                    mascota: pets[mascotaIndex]
                });
            } catch (error) {
                reject(error);
            }
        }, 2500); // 2.5 segundos de retraso
    });
}

// Función principal del sistema de gestión de mascotas
async function petManagementSystem() {
    while (true) {
        try {
            // Mostrar opciones del menú
            let choice = prompt(`Seleccione una opción:
1. Registrar una nueva mascota (con retraso)
2. Listar todas las mascotas registradas
3. Buscar una mascota por nombre (con retardo)
4. Actualizar el estado de salud de una mascota (con espera)
5. Eliminar una mascota por nombre
6. Salir del programa`);

            // Convertir la elección a número
            choice = parseInt(choice);

            // Manejar diferentes opciones del menú
            switch (choice) {
                case 1:
                    await registrarMascotaConRetrasoInteractivo();
                    break;
                case 2:
                    listarMascotas();
                    break;
                case 3:
                    await buscarMascotaConRetardoInteractivo();
                    break;
                case 4:
                    await actualizarEstadoSaludConEsperaInteractivo();
                    break;
                case 5:
                    eliminarMascota();
                    break;
                case 6:
                    alert("Saliendo del programa. ¡Hasta luego!");
                    return;
                default:
                    alert("Opción inválida. Por favor, intente de nuevo.");
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

// Función interactiva para registrar mascota con retraso
async function registrarMascotaConRetrasoInteractivo() {
    try {
        let nombre = prompt("Ingrese el nombre de la mascota:");
        let especie = prompt("Ingrese la especie de la mascota:");
        let edad = prompt("Ingrese la edad de la mascota:");
        let peso = prompt("Ingrese el peso de la mascota:");
        let estadoSalud = prompt("Ingrese el estado de salud de la mascota (sano, enfermo o en tratamiento):");

        // Validar estado de salud
        if (!['sano', 'enfermo', 'en tratamiento'].includes(estadoSalud.toLowerCase())) {
            alert("Por favor, ingrese un estado de salud válido: sano, enfermo o en tratamiento");
            return;
        }

        // Crear objeto de mascota
        let mascota = {
            nombre: nombre,
            especie: especie,
            edad: edad,
            peso: peso,
            estadoSalud: estadoSalud.toLowerCase()
        };

        // Mostrar mensaje de carga
        alert("Registrando mascota... Por favor espere.");

        // Usar método asíncrono para registrar mascota
        const resultado = await registrarMascotaConRetraso(mascota);
        alert(resultado.mensaje);
    } catch (error) {
        alert(error.message);
    }
}

// Función interactiva para buscar mascota con retardo
async function buscarMascotaConRetardoInteractivo() {
    try {
        let nombreBuscar = prompt("Ingrese el nombre de la mascota a buscar:");
        
        // Mostrar mensaje de carga
        alert("Buscando mascota... Por favor espere.");

        // Usar método asíncrono para buscar mascota
        const resultado = await buscarMascotaConRetardo(nombreBuscar);
        
        alert(`Mascota encontrada:\n
Nombre: ${resultado.mascota.nombre}
Especie: ${resultado.mascota.especie}
Edad: ${resultado.mascota.edad}
Peso: ${resultado.mascota.peso}
Estado de Salud: ${resultado.mascota.estadoSalud}`);
    } catch (error) {
        alert(error.message);
    }
}

// Función interactiva para actualizar estado de salud con espera
async function actualizarEstadoSaludConEsperaInteractivo() {
    try {
        let nombreBuscar = prompt("Ingrese el nombre de la mascota para actualizar su estado de salud:");
        let nuevoEstadoSalud = prompt(`Ingrese el nuevo estado de salud para ${nombreBuscar} (sano, enfermo o en tratamiento):`);
        
        // Mostrar mensaje de carga
        alert("Actualizando estado de salud... Por favor espere.");

        // Usar método asíncrono para actualizar estado de salud
        const resultado = await actualizarEstadoSaludConEspera(nombreBuscar, nuevoEstadoSalud);
        alert(resultado.mensaje);
    } catch (error) {
        alert(error.message);
    }
}

// Función para listar todas las mascotas
function listarMascotas() {
    if (pets.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }

    let listado = "Mascotas registradas:\n\n";
    pets.forEach((mascota, index) => {
        listado += `Mascota ${index + 1}:\n`;
        listado += `Nombre: ${mascota.nombre}\n`;
        listado += `Especie: ${mascota.especie}\n`;
        listado += `Edad: ${mascota.edad}\n`;
        listado += `Peso: ${mascota.peso}\n`;
        listado += `Estado de Salud: ${mascota.estadoSalud}\n\n`;
    });

    alert(listado);
}

// Función para eliminar una mascota por nombre
function eliminarMascota() {
    let nombreBuscar = prompt("Ingrese el nombre de la mascota a eliminar:");
    
    let mascotaIndex = pets.findIndex(mascota => 
        mascota.nombre.toLowerCase() === nombreBuscar.toLowerCase()
    );

    if (mascotaIndex !== -1) {
        // Eliminar la mascota del arreglo
        pets.splice(mascotaIndex, 1);
        alert(`Mascota ${nombreBuscar} eliminada exitosamente.`);
    } else {
        alert(`No se encontró ninguna mascota con el nombre ${nombreBuscar}.`);
    }
}

// Iniciar el sistema de gestión de mascotas
petManagementSystem();