import {useState, useEffect} from "react";
import {random} from "./utils/random";
import {gameState} from "./utils/gameState";
import {getTotalStats} from "./utils/statsCalculator";
import MainMenu from "./components/MainMenu";
import Pokemon from "./components/Pokemon";
import GameOverMenu from "./components/GameOverMenu";

function App() {

  const [currentState, setGameState] = useState(gameState.menu);

  const [pokemonIds, setPokemonIds] = useState([random(), random()]);
  const [pokemonData, setPokemonData] = useState([null, null]);
  const [count, setCount] = useState(0);

  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore")) || 0;
  });

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const responses = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIds[0]}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIds[1]}`)
        ]);
        const data = await Promise.all(responses.map(res => res.json()));
        setPokemonData(data);
      } catch (error) {
        console.error("Could not load data:", error);
      }
    }

    fetchPokemonData();
  }, [pokemonIds]);

  useEffect(() => {
    localStorage.setItem("highScore", highScore);
  }, [highScore]);

  function updatePokemon(selectedIndex) {

    const totalStats = [
      getTotalStats(pokemonData[0].stats),
      getTotalStats(pokemonData[1].stats)
    ];

    const otherIndex = (selectedIndex + 1) % 2
    const isWinner = totalStats[selectedIndex] > totalStats[otherIndex]

    if (isWinner) {

      setScore(prevScore => prevScore + 1)

      if (count >= 5) {
        setCount(0);
        setPokemonIds([random(), random()])
      } else {
        setCount(prevCount => prevCount + 1);
        setPokemonIds(prevPokemon =>
            prevPokemon.map((item, index) =>
                index === selectedIndex ? item : random()
            )
        )
      }

    } else {

      setFinalScore(score)

      if (score > highScore) {
        setHighScore(score)
      }

      setCount(0)
      setScore(0)
      setPokemonIds([random(), random()])
      setGameState(gameState.over)
    }
  }

  function render() {
    switch (currentState) {

      case gameState.menu:
        return (
            <MainMenu setGameState={setGameState} />
        )

      case gameState.playing:
        return (
          <section
              className="h-screen flex flex-col 2xl:flex-row select-none cursor-default"
          >

            <Pokemon index={0} data={pokemonData[0]} updatePokemon={updatePokemon} />
            <Pokemon index={1} data={pokemonData[1]} updatePokemon={updatePokemon} />

            <div className="versus">VS</div>

          </section>
        )

      case gameState.over:
        return (
            <GameOverMenu setGameState={setGameState} score={finalScore} highScore={highScore} />
        )
    }
  }

  return (
    <main>
      {render()}
    </main>
  )
}

export default App
