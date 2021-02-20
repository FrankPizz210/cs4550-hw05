import React, { useState, useEffect } from 'react';


import {ch_join, ch_push} from './socket';

function Digits4() {
  const [state, setState] = useState({
    guesses: [],
    guess: [],
    decipher: [],
  });

  let {target, guesses, guess, decipher} = state;

  useEffect(() => {
    console.log(state)
    ch_join(setState);
  },[]);

  function updateGuess(ev) {
    let num = ev.target.value;
    if (num.length > 4) {
      num = num.substring(0,4);
    }

    let guess = num;
    let state1 = Object.assign({}, state, {guess});

    setState(state1);
  }

  function makeGuess() {
    ch_push(guess);
  }

  function keypress(ev) {
    if (ev.key == "Enter") {
      makeGuess();
    }
  }

  function resetGame() {
    ch_join(setState);
  }

//Displays if lost
  if (guesses.length > 7) {
    return (
      <div className="App">
        <h1>You Lose!</h1>
        <p>
          <input type="text"
                 value={guess}
                 onChange={updateGuess}
                 onKeyPress={keypress} />
          <button onClick={makeGuess}>
            Guess
          </button>
        </p>
        <table>
          <tr>
            <td>1</td>
            <td>{guesses[0] ? guesses[0] : ""}</td>
            <td>{decipher[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{guesses[1] ? guesses[1] : ""}</td>
            <td>{decipher[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{guesses[2] ? guesses[2] : ""}</td>
            <td>{decipher[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{guesses[3] ? guesses[3] : ""}</td>
            <td>{decipher[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{guesses[4] ? guesses[4] : ""}</td>
            <td>{decipher[4]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{guesses[5] ? guesses[5] : ""}</td>
            <td>{decipher[5]}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{guesses[6] ? guesses[6] : ""}</td>
            <td>{decipher[6]}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{guesses[7] ? guesses[7] : ""}</td>
            <td>{decipher[7]}</td>
          </tr>
        </table>
        <h1 className="lives">Lives: {8 - guesses.length}</h1>
        <p>
          <button onClick={() => resetGame()}>
            Reset
          </button>
        </p>
      </div>
    );
  }

//Displays if won
  if (decipher[0] && decipher[guesses.length-1].charAt(0) == 4) {
    return (
      <div className="App">
        <h1>You Win!</h1>
        <p>
          <input type="text"
                 value={guess}
                 onChange={updateGuess}
                 onKeyPress={keypress} />
          <button onClick={makeGuess}>
            Guess
          </button>
        </p>
        <table>
          <tr>
            <td>1</td>
            <td>{guesses[0] ? guesses[0] : ""}</td>
            <td>{decipher[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{guesses[1] ? guesses[1] : ""}</td>
            <td>{decipher[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{guesses[2] ? guesses[2] : ""}</td>
            <td>{decipher[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{guesses[3] ? guesses[3] : ""}</td>
            <td>{decipher[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{guesses[4] ? guesses[4] : ""}</td>
            <td>{decipher[4]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{guesses[5] ? guesses[5] : ""}</td>
            <td>{decipher[5]}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{guesses[6] ? guesses[6] : ""}</td>
            <td>{decipher[6]}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{guesses[7] ? guesses[7] : ""}</td>
            <td>{decipher[7]}</td>
          </tr>
        </table>
        <h1 className="lives">Lives: {8 - guesses.length}</h1>
        <p>
          <button onClick={() => resetGame()}>
            Reset
          </button>
        </p>
      </div>
    );
  }

// Main Game
  return (
    <div className="App">
      <h1>4 Digits</h1>
      <p>
        <input type="text"
               value={guess}
               onChange={updateGuess}
               onKeyPress={keypress} />
        <button onClick={makeGuess}>
          Guess
        </button>
      </p>
      <table>
        <tr>
          <td>1</td>
          <td>{guesses[0] ? guesses[0] : ""}</td>
          <td>{decipher[0]}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{guesses[1] ? guesses[1] : ""}</td>
          <td>{decipher[1]}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{guesses[2] ? guesses[2] : ""}</td>
          <td>{decipher[2]}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>{guesses[3] ? guesses[3] : ""}</td>
          <td>{decipher[3]}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>{guesses[4] ? guesses[4] : ""}</td>
          <td>{decipher[4]}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>{guesses[5] ? guesses[5] : ""}</td>
          <td>{decipher[5]}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>{guesses[6] ? guesses[6] : ""}</td>
          <td>{decipher[6]}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>{guesses[7] ? guesses[7] : ""}</td>
          <td>{decipher[7]}</td>
        </tr>
      </table>
      <h1 className="lives">Lives: {8 - guesses.length}</h1>
      <p>
        <button onClick={() => resetGame()}>
          Reset
        </button>
      </p>
    </div>
  );
}

export default Digits4;
