import React, { useReducer } from 'react'

function UseReducerTest() {
    
    const initialState =0;
    const reducer1 = (state,action)=>{
        switch(action){
            case  'INC':
            return state+1
            
            case  'DEC':
            return state-1
            
            case  'RESET':
            return 0
            default:
                return state
        }
    }
   const [count, dispatch] = useReducer(reducer1, initialState)
    return (
        <div>
            <p>Value is ::::::   {count} </p>
            <button onClick={ ()=> dispatch('INC') } >+</button>
            <button onClick={ ()=> dispatch('DEC') } >-</button>
            <button onClick={ ()=> dispatch('RESET') } >Reset</button>
        </div>
    )
}

export default UseReducerTest
