
let pets = [];
export function petlist() {
        let nombre = prompt("Ingresa el nombre de tu mascota")
        let especie = prompt("Ingresa la especia de " + nombre +" (Perro, Gato, etc...)")
        let edad = prompt("Ingresa la edad en años de " +nombre)
        let peso = prompt("Ingresa el peso en kg de " +nombre)
        let salud = prompt("Ingresa el estado de salud de " +nombre+ " (sano, enfermo o en tratamiento)")

        let mascota = {
            "Nombre": nombre,
            "Especie": especie,
            "Edad": edad,
            "Peso": peso,
            "Estado de salud": salud,
        }
        pets.push(mascota);

    
}


export function mostrarMascota() {
    if (pets.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }

    let mensaje = "Lista de Mascotas Registradas:\n\n";

    pets.forEach((mascota, index) => {
        mensaje += `Mascota ${index + 1}:\n`;
        mensaje += `Nombre: ${mascota.Nombre}\n`;
        mensaje += `Especie: ${mascota.Especie}\n`;
        mensaje += `Edad: ${mascota.Edad} años\n`;
        mensaje += `Peso: ${mascota.Peso} kg\n`;
        mensaje += `Estado de Salud: ${mascota["Estado de salud"]}\n\n`;
    });

    alert(mensaje);
}


export function buscarMascota() {
    let searchName = prompt("Ingresa el nombre de la qmascota que quieras buscar:");

    let findPet = pets.find(mascota => mascota.nombre.toLowerCase() === searchName.toLocaleLowerCase());

    if (findPet){
        alert(`Mascota Encontrada:\n
Nombre: ${findPet.Nombre}
Especie: ${findPet.Especie}
Edad: ${findPet.Edad} años
Peso: ${findPet.Peso} kg
Estado de Salud: ${findPet["Estado de salud"]}`);
    }

    else{
        alert("El nombre de la mascota que ingresaste no coincide con ninguna de las que se encuentran en el sistema")
    }
}