
// On import { useDispatch } depuis react-redux
import { useDispatch } from "react-redux";
import { playPause } from "./action";




export function PlayPauseButton() {
    // On utlise le hooks useDispatch dans notre composant pour récupérer la fonction dispatch de redux.
    const dispatch = useDispatch(); 

    return (
        <button className="button" onClick={() => {
            dispatch(playPause()); 
        }} 
        >
            Pause / Reprendre
        </button>
    )
        
}