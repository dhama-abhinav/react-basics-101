import { useRef, useState } from 'react';
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';
import UseReducerTest from './UseReducerTest';

function App() {
  //const [user,setUser] =useState("ABHI")
  const [{user},dispatch]=useStateValue()

  const ref = useRef(null)

  const useRefClick = ()=>{
    ref.current.style.color="red"
    ref.current.style.font="bold"
    ref.current.focus()
  }

  const loginAS = ()=>{
    dispatch({
      type : 'SET_USER',
      user : "DHAMA"
    })
  }
  const loggedOut = ()=>{
    dispatch({
      type : 'REMOVE_USER',
      user : null
    })
  }
  return (
    <div className="App">
      <p>React context api demo</p>
      <Login />

      <h1>Logged in user is {user}</h1>
      <button onClick={loginAS}>Login</button>
      
      <button onClick={loggedOut}>Logout</button>
      <br />
      <br />
      <hr />

      <br />
      <br />
      <div className="use-ref">
      <p>useRef demo</p>
        <input ref={ref} type="text" />
        <button onClick={useRefClick}>Click</button>
      </div>
      <br />
      <br />
      <hr />

      <div className="use-reducer-test">
        <p>useReducer demo</p>
        <UseReducerTest />
      </div>
      <br />
      <br />
      <hr />

    </div>
  );
}

export default App;
