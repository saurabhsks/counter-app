//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react'
function App() {
  const [count, setCount]=useState(0); //initialised count using useState as 0
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
         <div className="card-body">
           <h1>Counter App </h1>
           <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3"  //created increment function using arrow function and setCount
             onClick={()=>setCount(count+1)}>  
             Increment  
            </button>
            <button className="btn btn-danger mx-3" //created decrement function using arrow function and setCount,also disabled button when count=0
             onClick={()=>setCount(count-1)}
             disabled={count===0}
             >
             Decrement
             </button>
            <button className="btn btn-secondary mx-3" //created reset function using arrow function and setCount==0 when clickedgit,also disabled button when count=0
             onClick={()=>setCount(0)}
             disabled={count===0}
             >
             Reset
             </button>
           </div> 
        </div>

      </div>
      
    </div>
  );
}

export default App;
