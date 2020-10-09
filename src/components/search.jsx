import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
const Search = (props) => {
    const [Keyword, setKeyword] = useState("")
    return ( <div>
        <input type="text" onChange={(e)=>{
            setKeyword(e.target.value)
            props.Search(Keyword)
        }}/>
        <button onClick={()=>props.Search(Keyword)}>Search</button>
        <button onClick={()=>props.WorkDone()}>list of work done?</button>
    </div> );
}
const AppToStore = (dispatch) => {
    return {        
        Search:(keyword)=>{
            dispatch({type:"KEYSEARCH",value:keyword})
        },
        WorkDone:()=>{
            dispatch({type:"DONESEARCH"})
        }
    }
    
}


export default connect(null, AppToStore) (Search);