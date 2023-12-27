import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    if (playerName !== "") setIsEditable((edit) => !edit);
    if (isEditable) onChangeName(symbol, playerName);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditable ? (
          <input
            required
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditable ? "Save" : "Edit"}</button>
    </li>
  );
}
