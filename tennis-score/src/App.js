


import { ResetButton } from './ResetButton';
import { PointScoredButton } from './PointScoredButton';
import { Display }  from './Display';
import {PlayPauseButton} from './PlayPauseButton';





export default function App() {
  
 
  return (
    <div>
        
        <Display />
          <div className="buttons-row">
            <PointScoredButton playerId="player1" >Point Joueur 1 </PointScoredButton>
            <PointScoredButton playerId="player2" >Point Joueur 2 </PointScoredButton>
          </div>
          <div className='buttons-row'>
            <ResetButton /> 
            <PlayPauseButton />
        </div>
      </div>

  )};















  /*<div className="App">
  <p className="display" id="score">Le score est: 0 - 0</p>
  <div className="buttons">
    <div className="buttons-row">
      <button className="button" id="reset">Remettre à zéro</button>
      <button className="button" id="pause">Pause / Reprendre</button>
    </div>
  </div>
</div>*/