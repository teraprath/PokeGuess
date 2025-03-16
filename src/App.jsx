import {useState} from "react";
import {random} from "./utils/random";
import Pokemon from "./components/Pokemon";

function App() {

  const [playing, setPlaying] = useState(true);
  const [pokemon, setPokemon] = useState([random(), random()]);

  function updatePokemon(selectedIndex) {
    setPokemon(prevPokemon => prevPokemon.map((item, index) => index === selectedIndex ? item : random()));
  }

  return (
    <main>
      {
        playing ?

          <section
              className="h-screen flex flex-col 2xl:flex-row select-none cursor-default"
          >

            <Pokemon index={0} pokemonId={pokemon[0]} updatePokemon={updatePokemon} />
            <Pokemon index={1} pokemonId={pokemon[1]} updatePokemon={updatePokemon} />

            <div className="versus">VS</div>

          </section>

        :

          <section
            className=""
          >
          </section>
      }
    </main>
  )
}

export default App
