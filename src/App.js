import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const store = useSelector(store => store)
  console.log(store)
  const dispatch = useDispatch();
  return (
    <div className="App">
      Redux Saga
      <button onClick={() => dispatch({type: 'CLICK'})}>Click me</button>
    </div>
  );
}

export default App;
