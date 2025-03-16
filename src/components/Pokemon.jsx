import {useEffect, useState} from "react";

function Pokemon({ index, pokemonId, updatePokemon }) {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.error("Could not load data:", error);
            }
        }

        fetchData().catch(err => console.log(err));

    }, [pokemonId]);

    return (
        <button
            onClick={() => updatePokemon(index)}
            className={`
                h-1/2 xl:h-full
                w-full 
                text-white
                text-3xl xl:text-5xl 
                font-semibold
                uppercase
                bg-${data ? data.types[0].type.name : "white"}
                hover:opacity-85 hover:scale-95 hover:rounded-xl 
                active:opacity-85 active:scale-95 active:rounded-xl 
                transition-all duration-300
                cursor-pointer
            `}
        >
            <div
                className={`flex ${index === 0 ? "flex-col-reverse 2xl:flex-col" : "flex-col"} justify-center items-center gap-8`}
            >
                <img
                    className="h-60 xl:h-65 2xl:h-80"
                    src={data?.sprites?.other?.['official-artwork']?.front_default || "/ball.svg"}
                    alt="pokemon"
                    draggable={false}
                />
                <div
                    className={`p-2 xl:p-4 bg-white text-${data ? data.types[0].type.name : "text-gray-900"}`}
                >
                    <p>{data ? data.name : "Loading"}</p>
                </div>
            </div>
        </button>
    )
}

export default Pokemon