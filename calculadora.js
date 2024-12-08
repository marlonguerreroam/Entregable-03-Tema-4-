const readline = require("readline");

// Configuración del lector de líneas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 1: Declaración de Variables
let num1 = 10;  // Primer número
let num2 = 5;   // Segundo número
let operacion = "suma";  // Operación matemática

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida";
    }
}

// Paso 3: Validación de datos y operaciones
function validarOperacion(operacion) {
    const operacionesValidas = ["suma", "resta", "multiplicacion", "division"];
    return operacionesValidas.includes(operacion);
}

// Paso 4: Bucle para realizar múltiples operaciones
function realizarOperaciones() {
    rl.question("Ingrese el primer número: ", (input1) => {
        num1 = parseFloat(input1);

        rl.question("Ingrese el segundo número: ", (input2) => {
            num2 = parseFloat(input2);

            rl.question("Ingrese la operación (suma, resta, multiplicacion, division): ", (operacion) => {
                // Validar si la operación es correcta
                if (!validarOperacion(operacion)) {
                    console.log("Operación no válida. Intente de nuevo.");
                    rl.close(); // Cerrar la interfaz y reiniciar
                    return;
                }

                // Realizar la operación
                let resultado = realizarOperacion(num1, num2, operacion);
                console.log("El resultado es: " + resultado);

                rl.question("¿Desea realizar otra operación? (si/no): ", (respuesta) => {
                    if (respuesta.toLowerCase() === "si") {
                        realizarOperaciones(); // Continuar realizando operaciones
                    } else {
                        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
                        rl.close(); // Salir
                    }
                });
            });
        });
    });
}

realizarOperaciones(); // Iniciar el proceso
