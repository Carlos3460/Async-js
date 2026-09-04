/**
 * Promesas escrita
 * 1. resolve, el caso de exito (caso en el que la promesa se resuelve de manera favorable)
 * 2.reject, el caso de fracaso (caso en el que la promesa se resuelve de manera no favorable)
 * !Importante
 * Al crear una promesa esta debe ser retornada de una funcion
 */
console.log("Primer console log");
function waitNSeconds(seconds){
    console.log("Console log dentro de la funcion 1");
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const state = true;
            if(state){
                resolve("La peticion fue exitosa");
            }else{
                reject("La peticion fracaso");
            }

        }), seconds * 1000;
    });
};

waitNSeconds(3).then((response) => {
    console.log("Caso resolve " + resolve);
     console.log(resolve);
})
.catch((error) => {
    console.log("Caso reject ");
     console.log(error);
});

console.log("Segundo console log");
console.log("Tercer console log");
console.log("Cuarto console log");