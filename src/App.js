
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { number } from '.';

function App() {
const state = useSelector((storeObj)=>{
  return storeObj
})

const dispatch = useDispatch()




  return (
    <div className="App ">
     {/* Calculator Body */}
<div className="calc-body ">
  {/* Calculator Display Screen */}
  <div className="calc-screen">
   
    <div id="calc-typed"> {state.result  } </div>
  </div>
  {/* Calculator Buttons */}
  <div className="calc-button-row">
    <button className="ac" onClick={()=>{dispatch({type:'CLEAR'})}}>AC</button>
    <button className="opt" >+/−</button>
    <button className="opt"  onClick={()=>{dispatch({type:'PERCENTAGE'})}}>%</button>
    <button className="opt"  onClick={()=>{dispatch({type:'DIVISION'})}}>÷</button>
    <button value={7}onClick={(e)=>{dispatch(number(e.target.value))}}>7</button>
    <button value={8}onClick={(e)=>{dispatch(number(e.target.value))}}>8</button>
    <button value={9}onClick={(e)=>{dispatch(number(e.target.value))}}>9</button>
    <button className="opt"  onClick={()=>{dispatch({type:'MULTIPLICATION'})}}>*</button>
    <button value={4}onClick={(e)=>{dispatch(number(e.target.value))}}>4</button>
    <button value={5}onClick={(e)=>{dispatch(number(e.target.value))}}>5</button>
    <button value={6}onClick={(e)=>{dispatch(number(e.target.value))}}>6</button>
    <button className="opt"  onClick={()=>{dispatch({type:'SUBTRACTION'})}}>−</button>
    <button value={1} onClick={(e)=>{dispatch(number(e.target.value))}}>1</button>
    <button value={2}onClick={(e)=>{dispatch(number(e.target.value))}}>2</button>
    <button value={3}onClick={(e)=>{dispatch(number(e.target.value))}}>3</button>
    <button className="opt"  onClick={()=>{dispatch({type:'ADDITION'})}}>+</button>
    <button value={0}onClick={(e)=>{dispatch(number(e.target.value))}}>0</button>
    <button>.</button>
    <button>⌫</button>
    <button className="opt" onClick={()=>{dispatch({type:'RESULT'})}}>=</button>
  </div>
</div>

    </div>
  );
}

export default App;
