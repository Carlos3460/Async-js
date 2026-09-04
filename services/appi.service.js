/**
 * Un servicio es un tipo de archivo
 * donde vamos a tener funciones o clase con sus metodos que ejecutan acciones
 * !Super importante
 * !Todas las funciones asincronas retornan una promesa
 * !No importa que pienses tu que esta retornando es una promesa
 * Nota
 * La api fetch por defecto lanza una peticion GET
 */
import {API_URL} from "/env.js";
console.log(API_URL);

//GET
export async function getAllProducts(){
  //1.Lanzar la peticion
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};


//Get 1 solo producto
export const getSingleProduct = async function (id) {
    try{
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
    }catch(error){
        console.error("Error", error);
    };
    
};

//POST
export const createProduct = async () => {
    try{
        const response = await fetch(API_URL, {
        method: "POST",
        header: {"Content-Type":"application/json"},
        body: JSON.stringify(productObject),
        });
        const data = await response.json();
        return data;
    }catch(error){}
    
};

createProduct(
    {
title: "crema corporal",
price: 100,
description: "crema azul avon",
category: "cuidado personal",
image: "http://example.com"
});

//PUT
export async function upDateProduct(id, productObject){
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(productObject),
        });
        const data = await response.json();
    }catch (error){}
};
upDateProduct(10, {title: "Regulador de voltaje"});
upDateProduct(10, {title: "Regulador de voltaje", price: 200});

//DELETE
export const deleteProduct = async function (id){
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
    }catch(error){}
};

deleteProduct(5);
