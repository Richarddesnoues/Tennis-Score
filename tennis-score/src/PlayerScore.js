import { useSelector } from "react-redux";


export function PlayerScore({ playerId, playerName }) {
    // PlayerId est soit "player1" soit "player2"
    // On l'utilise dans le selector pour accéder au score du joueur !
    const score = useSelector((state) => state[playerId]);


    return (
        <div className="player-score">
            <p>{playerName}</p>
            <p>{score}</p>
        </div>
    );
}
