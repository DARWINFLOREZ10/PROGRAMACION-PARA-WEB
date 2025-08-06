let cantidad = prompt("Cuántos números quieres ingresar?");
cantidad = parseInt(cantidad);

if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Por favor, ingresa un número válido mayor que 0.");
} else {
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let numero = prompt(`Ingresa el numero ${i}:`);
        numero = parseFloat(numero);

        if (isNaN(numero)) {
            console.log("Por favor, ingresa un número válido.");
            i--;
        } else {
            suma += numero;
        }
    }
    let promedio = suma / cantidad;
    console.log(`El promedio de los ${cantidad} números ingresados es: ${promedio}`);
} 