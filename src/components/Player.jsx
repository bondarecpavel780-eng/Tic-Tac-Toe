import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setIsEditing] = useState(false);
function editName() {
    setIsEditing((editing) => !editing);
    if(isEditing){
    onChangeName(symbol, playerName);
    }
}

function handleChange(event){
    setPlayerName(event.target.value);
}

let playerInfo = <span className="player-name">{playerName}</span>;

if(isEditing){
    playerInfo = <input type="text" required value={playerName} onChange={handleChange}/>;

} 
    return (
      <li className={isActive ? 'active' : undefined}>  
            <span className="player">
                {playerInfo}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editName}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
