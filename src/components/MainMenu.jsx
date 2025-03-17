import {gameState} from "../utils/gameState";

function MainMenu({ setGameState }) {
    return (
        <section
            className="h-screen w-screen bg-white flex justify-center items-center"
        >
            <button
                onClick={() => setGameState(gameState.playing)}
                className="button text-white bg-blue-500 hover:bg-blue-600"
            >Play</button>
        </section>
    )
}

export default MainMenu