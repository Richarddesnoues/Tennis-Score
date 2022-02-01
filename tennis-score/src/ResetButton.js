import { useDispatch } from "react-redux";
import { restart } from "./action";

export function ResetButton() {

    const dispatch = useDispatch();

    return (
        <button className="button" onClick={() => {
            dispatch(restart()); 
        }} 
        >
            Remettre à zéro
        </button>
    )
}



