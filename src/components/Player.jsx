import { useState } from "react"

export default function Player({initialName, symbol}) {
const [playerName, setPlayerName] = useState(initialName)
const [isEditing, setIsEditing] = useState(false);
function editName() {
    setIsEditing((editing) => !editing);

}

function handleChange(event){
    setPlayerName(event.target.value);
}

let playerInfo = <span className="player-name">{playerName}</span>;

if(isEditing){
    playerInfo = <input type="text" required value={playerName} onChange={handleChange}/>;

} 
    return (
      <li>
            <span className="player">
                {playerInfo}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editName}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
