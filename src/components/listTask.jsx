import React,{useState} from 'react';
import { connect } from 'react-redux';
import '../App.css';
const ListTask = (props) => {
    const [Show, setShow] = useState(false);
    const [Value, setValue] = useState("")
    const [id, setId] = useState(0)
    return (  
        <div>
            {props.todo.map(el=>
                <div>
            <li key={el.id}>{el.InputValue}</li>
            <button onClick={()=>props.Remove(el.id)}>Remove</button>
            <button onClick={()=>{setShow(!Show)
                setId(el.id)}}>Edit</button>
            <button onClick={()=>props.Done(el.id)}>done</button>
            </div>
            )}
            <input className={Show?"display":"none"} type="text" onChange={(e)=>setValue(e.target.value)} />
            <button className={Show?"display":"none"} onClick={()=>{
                props.Edit(id,Value,props.todo.isDone)
                setShow(!Show)
            }}>Change</button>
        </div>
    );
}
const StoreToApp =(state)=>{
    return{
        todo:state.main
    }
}
const AppToStore =(dispatch)=>{
    return{
        Remove:(Id)=>{
        dispatch({type:"REMOVE_INPUT",id:Id})
        },
        Edit:(Id,Value,isDone)=>{
            let id=Id
            let InputValue=Value
            let obj={InputValue,id,isDone}
        dispatch({type:"EDIT_TASK",value:obj})
        },
        Done:(id)=>{
        dispatch({type:"TASKisDONE",value:id})
        },
    }  
}
export default connect(StoreToApp, AppToStore) (ListTask);