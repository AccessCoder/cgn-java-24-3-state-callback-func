import './App.css'
import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

function App() {

    const [count, setCount] = useState<number>(0)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    function incrementCount(){
        setCount(count+1)
    }

  return (
    <>
      <h1>Clicker Game!</h1>
        <h2>{count}</h2>
        <CounterButton setValue={incrementCount}/>

        {/*{count % 2 === 0 && <p>Count is even!</p>}*/}

        {!isLoggedIn ?
            <>
        <button onClick={() => setIsLoggedIn(true)}>LOGIN</button>
        <h3>SIE SIND AUSGELOGGT!!</h3>
            </>
         :
            <>
        <button onClick={() => setIsLoggedIn(false)}>LOGOUT</button>
        <h3>SIE SIND EINGELOGGT!!</h3>
            </>
        }
    </>
  )
}

export default App
