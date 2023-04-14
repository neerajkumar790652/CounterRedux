import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment,decrement,reset } from '../Redux/Counter';

const Comp1 = () => {
    const count = useSelector((store)=>{
        return store.data.Counter
    })
    const dispatch =useDispatch()

  return (
    <div className='container'>
        <button onClick={()=>dispatch(increment(1))}>Increment</button>
      <h1 style={{textAlign:"center"}}>{count}</h1>
      <button onClick={()=>dispatch(decrement(-1))}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Comp1
