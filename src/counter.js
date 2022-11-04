import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,byPayload } from "./slices/counterSlice";

const counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
  
    const [counterValue,setCounterValue] = useState()
  
  const useClick = ()=>{
    dispatch(byPayload(counterValue))
  }
  
    return (
      <div className="App">
        <div>
          <h2>{count}</h2>
        </div>
  
        <div>
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
  
        <div>
          
          <input type="text" value={counterValue} onChange={(e)=>setCounterValue(e.target.value)} />
          <br />
          <button onClick={useClick}>Send data</button>
        </div>
      </div>
    );
}

export default counter