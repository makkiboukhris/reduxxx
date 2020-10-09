import React from 'react';
import {connect} from 'react-redux';
const ADDTASK = (props) => {
    return (  
        <div>
        <input type="text" onChange={(e)=>props.handleChange(e.target.value)}/>
        <button onClick={()=>props.Add(props.input)} >Add to list</button>   
        </div>
    );
}
const AppToStore =(dispatch)=>{
    return{
        handleChange:(Value)=>{
        dispatch({type:"SETINPUT",value:Value})
        },
        Add:(input)=>{
            let obj={}
            let isDone=false
            let InputValue=input
            let id=Math.floor(Math.random()*1000)
            obj={InputValue,id,isDone}
        dispatch({type:"ADD_INPUT",value:obj})
        }
    }  
}
const StoreToApp =(state)=>{
    return{
        input:state.input
        }
    }  


export default connect(StoreToApp, AppToStore)  (ADDTASK);