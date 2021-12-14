import React from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      Redux Saga
      <button onClick={() => dispatch({type: 'CLICK'})}>Click me</button>
    </div>
  );
}

export default App;
