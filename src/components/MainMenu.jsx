import {gameState} from "../utils/gameState";
import Footer from "./Footer.jsx";

function MainMenu({ setGameState }) {
    return (
        <>
            <section
                className="h-screen w-screen bg-white flex flex-col justify-center items-center gap-2"
            >
                <img className="w-60 mb-6" src="/logo.png" alt="logo" />
                <div className="flex flex-col">
                    <label htmlFor="mode" className="text-gray-400 text-base lg:text-lg font-semibold uppercase">Mode</label>
                    <select name="mode" className="button text-gray-600 bg-gray-100 hover:bg-gray-200 appearance-none focus:ring-0 focus:outline-none" defaultValue="total_stats">
                        <option name="total_stats">Total Stats</option>
                        <option name="hp">HP</option>
                        <option name="attack">Attack</option>
                        <option name="defense">Defense</option>
                        <option name="special-attack">Special Attack</option>
                        <option name="special-defense">Special Defense</option>
                        <option name="speed">Speed</option>
                        <option name="base_experience">Base Experience</option>
                    </select>
                </div>
                <button
                    onClick={() => setGameState(gameState.playing)}
                    className="button text-white bg-blue-500 hover:bg-blue-600"
                >
                    Start Game
                </button>
                <Footer />
            </section>
        </>
    )
}

export default MainMenu