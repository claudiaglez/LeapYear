// Imports
const {expect} = require("@jest/globals");
const LeapYear = require("../LeapYear");

/**
* Un año no es bisiesto si no es divisible por 4
* Un año es bisiesto si es divisible por 4
* Un año es bisiesto si es divisible por 400
* Un año no es bisiesto si es divisible por 100 pero no por 400

Ejemplos:

1997 no es bisiesto (no es divisible por 4)
1996 es bisiesto (divisible por 4)
1600 es bisiesto (divisible por 400)
1800 no es bisiesto (divisible por 4, divisible por 100, NO divisible por 400)

* El método debe devolver 'true' si un año es bisiesto, y 'false' si no lo es.
 */

const leap_year = new LeapYear();

describe ('Test que valida que un año no es bisiesto si no es divisible por 4',() => {

    test('Test devuelve false cuando no es divisible por 4', () => {
         /**
         * GHERKING TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este no sea divisible por 4
            * THEN / ASSERT: devuelve false como resultado
         */
    
        // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
        const numero_ingresado = 1997;
        const respuesta_esperada = "false";

        // ACT: ejecuta el escenario
        const respuesta_recibida = leap_year.validate_leapyear(numero_ingresado);

        // ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });

    
    test('Test devuelve true cuando es divisible por 4', () => {
        /**
         * GHERKING TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 4
            * THEN / ASSERT: devuelve true como resultado
         */
    
        // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
        const numero_ingresado = 1996;
        const respuesta_esperada = "true";


        // ACT: ejecuta el escenario
        const respuesta_recibida = leap_year.validate_leapyear(numero_ingresado);

        // ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });

    test('Test devuelve true cuando es divisible por 400', () => {
        /**
         * GHERKING TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 400
            * THEN / ASSERT: devuelve true como resultado
         */
    
        // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
        const numero_ingresado = 1600;
        const respuesta_esperada = "true";


        // ACT: ejecuta el escenario
        const respuesta_recibida = leap_year.validate_leapyear(numero_ingresado);

        // ASSERT: comprobar el escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);
    });
    
    
    test('Test devuelve false cuando divisible por 4, divisible por 100, NO divisible por 400', () => {
        /**
        * GHERKING TEST
           * GIVEN / ARRANGE: un número
           * WHEN / ACT: cuando este sea divisible por 4, divisible por 100, NO divisible por 400
           * THEN / ASSERT: devuelve false como resultado
        */
   
       // ARRANGE: preparar el escenario (las entradas que quiero dar y las salidas que espero)
       const numero_ingresado = 1800;
       const respuesta_esperada = "false";

       // ACT: ejecuta el escenario
       const respuesta_recibida = leap_year.validate_leapyear(numero_ingresado);

       // ASSERT: comprobar el escenario
       expect(respuesta_recibida).toBe(respuesta_esperada);
   });

})
