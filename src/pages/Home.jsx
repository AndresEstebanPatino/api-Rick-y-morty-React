import { useState, useEffect } from "react";
import { fetchCharacters } from "../services/fetchCharacters.service";
import CharacterCard from "../components/CharacterCard";


export const Home = () => {

    const [characters, setCharacters] = useState([]); //Definimos nuestro estado inicializado con un array vacío

    useEffect(()=> {
            const getCharacters = async () => {
            const data = await fetchCharacters();
            setCharacters(data) //Metemos la data dentro de nuestro estado (characters)
        };
        getCharacters();
    }, [])

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white p-8 relative overflow-hidden">
        <h1 className="text-5xl text-center mb-12 drop-shadow-[0_0_10px_#39FF14]">Rick and Morty Characters</h1>
        <div className="flex flex-wrap gap-6 justify-center z-10 relative">

            {characters.map((char)=>(
                <CharacterCard
                    key={char.id}
                    name={char.name}
                    species={char.species}
                    image={char.image}
                    status={char.status}
                />
            ))
            }
        </div>
    </div>
  )
}
