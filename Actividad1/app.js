//let mateBasica = require('./mate');
const mateBasica = require('./mate')
//console.log(mateBasica.suma(3,4));

const readline = require("readline");

const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function operaciones(){



    scanner.question("Por favor ingresa " +
        "\n 1 : para Realizar una multiplicación " +
        "\n 2 : para Realizar una suma " +
        "\n 3 : para Realizar una resta " +
        "\n 4 : para Realizar una division ", (op) => {
                switch (op){
                    case '1':
                        scanner.question("Valor 1 ", (a) => {
                            scanner.question("Valor 2 ", (b) => {
                                console.log("El resultado de la multiplicación de " + a + "*" + b + " es igual a " + mateBasica.producto(a,b));
                                scanner.close();
                            });
                        });


                        break;


                    case '2':
                        scanner.question("Valor 1 ", (a) => {
                            scanner.question("Valor 2 ", (b) => {
                                console.log("El resultado de la suma de " + a + " + " + b + " es igual a " + mateBasica.suma(a,b));
                                scanner.close();
                            });
                        });


                        break;
                    case '3':
                        scanner.question("Valor 1 ", (a) => {
                            scanner.question("Valor 2 ", (b) => {
                                console.log("El resultado de la resta de " + a + " - " + b + " es igual a " + mateBasica.resta(a,b));
                                scanner.close();
                            });
                        });


                        break;
                    case '4':
                        scanner.question("Valor 1 ", (a) => {
                            scanner.question("Valor 2 ", (b) => {
                                console.log("El resultado de la division de " + a + " / " + b + " es igual a " + mateBasica.modulo(a,b));
                                scanner.close();
                            });
                        });


                        break;
                    default:
                        scanner.close();
                }


    });


}
operaciones();

scanner.on("close", function () {
    console.log("Adios");
    process.exit(0);
});