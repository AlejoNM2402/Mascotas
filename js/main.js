import { petlist } from "../js/functions.js";
import { mostrarMascota } from "../js/functions.js";

while (true) {
    

    let rta = prompt(`
    Seleccione una opción:
    1. Registrar una nueva mascota.
    2. Listar todas las mascotas registradas.
    3. Buscar una mascota por nombre.
    4. Actualizar el estado de salud de una mascota.
    5. Eliminar una mascota por nombre.
    6. Salir del programa. 
    `);

    switch (rta) {
        case "1":
            petlist()
            break
        case "2":
            mostrarMascota()
            break
        default:
            alert('Ingresa una opción valida')
            break
            
            
    }
}