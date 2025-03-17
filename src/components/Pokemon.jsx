function Pokemon({ index, data, updatePokemon }) {

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
                    className="h-60 xl:h-65 2xl:h-80 z-10 drop-shadow-md"
                    src={data?.sprites?.other?.['official-artwork']?.front_default || "/ball.svg"}
                    alt="pokemon"
                    draggable={false}
                />
                <div
                    className={`p-2 xl:p-4 z-10 bg-white text-${data ? data.types[0].type.name : "text-gray-900"}`}
                >
                    <p>{data ? data.name : "Loading"}</p>
                </div>
                <img
                    className="absolute opacity-20 h-80 xl:h-100 2xl:h-120"
                    src={`/elements/${data ? data.types[0].type.name : "normal"}.svg`}
                    alt="element"
                />
            </div>
        </button>
    )
}

export default Pokemon