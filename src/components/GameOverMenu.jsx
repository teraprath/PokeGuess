import {gameState} from "../utils/gameState";

function GameOverMenu({ setGameState, score, highScore }) {
    return (
        <section
            className="w-screen h-screen flex flex-col justify-center items-center gap-10 absolute bg-white"
        >
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-4xl lg:text-6xl text-gray-600 uppercase">Game Over</h1>
                { score === highScore
                    ? <h2 className="font-semibold text-2xl lg:text-3xl text-gray-600 uppercase">New Highscore: {score}</h2>
                    : <h2 className="font-semibold text-2xl lg:text-3xl text-gray-600 uppercase">Score: {score}</h2>
                }
                {highScore !== 0 && highScore !== score
                    && <p className="font-semibold text-2xl lg:text-3xl text-gray-400 uppercase">Highscore: {highScore}</p>
                }
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
                <button
                    onClick={() => setGameState(gameState.menu)}
                    className="button text-white bg-green-500 hover:bg-green-600"
                >Back to Menu</button>

                <button
                    onClick={() => setGameState(gameState.playing)}
                    className="button text-white bg-blue-500 hover:bg-blue-600"
                >Restart</button>
            </div>

        </section>
    )
}

export default GameOverMenu