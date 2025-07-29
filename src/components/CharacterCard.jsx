
const CharacterCard = ({name, species, image, status}) => {
  return (
    <div className="bg-gray-900 border-4 border-green-400 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.6)] w-64 p-4 transform hover:scale-105 transition duration-300">
        <img src={image} alt={image} />
        <h2 className="text-xl font-bold text-cyan-300 mt-4 font-mono">{name}</h2>
        <p className="text-green-300 font-light">{species}</p>
        <p className="text-green-300 font-light">{status}</p>
    </div>
  )
}

export default CharacterCard