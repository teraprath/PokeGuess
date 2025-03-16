function PokeButton({ pokemon }) {

    return (
        <button
            className={`
                h-1/2 xl:h-full
                w-full 
                text-white
                text-3xl xl:text-5xl 
                font-semibold 
                uppercase
                bg-${pokemon.type}
                hover:opacity-85 hover:scale-95 hover:rounded-xl 
                transition-all duration-300
            `}
        >
            <div
                className="flex flex-col justify-center items-center gap-8"
            >
                <img
                    className="size-1/2 sm:size-1/3 md:size-1/4 xl:size-1/5 2xl:size-1/2"
                    src="/pokeball.svg"
                    alt="pokemon"
                    draggable={false}
                />
                <div
                    className={`p-2 xl:p-4 bg-white text-${pokemon.type}`}
                >
                    <p>{pokemon.name}</p>
                </div>
            </div>
        </button>
    )
}

export default PokeButton