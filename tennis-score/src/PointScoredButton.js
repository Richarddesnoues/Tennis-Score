
import { useDispatch} from "react-redux";
import { pointScored } from "./action";




export function PointScoredButton({ playerId, children }) {

    const dispatch = useDispatch();
    return (
        <button
            className="button" 
            onClick={() => {
            dispatch(pointScored(playerId));
            console.log({ playerId } )
        }}
        >
            {children}
        </button>

    );

    
};