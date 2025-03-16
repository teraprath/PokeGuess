import PokeButton from "./components/PokeButton";

function App() {

  // TODO: Fetch API
  const pokemons = [
    {
      id: 23,
      name: "Pikachu",
      type: "electric"
    },
    {
      id: 303,
      name: "Haunter",
      type: "ghost"
    }
  ]

  return (
    <>
      <main
        className="h-screen flex flex-col 2xl:flex-row select-none cursor-default"
      >

        <PokeButton pokemon={pokemons[0]} />
        <PokeButton pokemon={pokemons[1]} />

        <div className="versus">VS</div>

      </main>
    </>
  )
}

export default App
