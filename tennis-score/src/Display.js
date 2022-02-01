import { useSelector } from "react-redux";



export function Display() {

    // On utilise  { useSelector } avec un paramètre une fonction
    // qui permet de récupérer uniquement la propriété `playing` du state.

    const gameIsPlaying = useSelector((state) => state.playing);
    const winner = useSelector((state) => state.winner);
    const player1Score = useSelector((state) => state.player1);
    const player2Score = useSelector((state) => state.player2);
    const advantage = useSelector((state) => state.advantage);





    // on peut ensuite utiliser cette valeur dans le rendu
    if (winner) {
        if (winner === "player1") {
            return <p className="display">Joueur 1 gagne</p>;
        } else {
            return <p className="display">Joueur 2 gagne</p>;
        }

        //TEST EN TERNAIRE NON FONCTIONNEL DANS CE CAS ( Apparement)
        //<p className="display"> {winner === player1 ? "Le joueur 1 à gagné" : "Le joueur 2 à gagné"} </p>
    } else if (gameIsPlaying === false) {
        return <p className="display">C'est la pause</p>;

    } else {
        let text = "Les score est: " + player1Score + " - " + player2Score;
        if (advantage) {
            if (advantage === "player1") {
                text += " Avantage joueur 1 ";
            } else {
                text += " Avantage joueur 2 ";
            }

        }



        return <p className="display">{text}</p>;
    }
        
}
