const BASE_URL = 'https://rickandmortyapi.com/api';//Definir la url base

export async function fetchCharacters(){
   try{
    const response = await fetch(`${BASE_URL}/character`);  //Hacer la petición a la api
    if(!response.ok){
        throw new Error('Error al obtener los personajes');
    } 
    const data = await response.json(); // tomar la respuesta y convertirla a Json
    console.log(data.results);
    return data.results // retornar el objeto que necesitamos que en este caso es el de "results"
   } catch(error){
    console.log(error); //Manejo de errores básico.
    return [];
   }
}

