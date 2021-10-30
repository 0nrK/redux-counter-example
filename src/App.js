import { useSelector, useDispatch, connect } from "react-redux";
import {increment,decrement, incrementByValue} from "./actions/index"
import './App.css';

function App(props) {

  const dispatch = useDispatch();



  return (
    <div className="App">

      <h1>Redux Counter Project </h1>

      <button onClick={() => dispatch(decrement())}>-</button>
      <span className="number">{props.count + 1}</span>
      <button onClick={() => dispatch(increment())}>+</button>


    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count : state
  }
}




export default connect(mapStateToProps)(App);
