import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {


  return (
    
    <main>
      <header>
        <img  src="game-logo.png" alt="logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />

        </ol>
        <GameBoard />
      </div>

    </main>
  )
}

export default App
