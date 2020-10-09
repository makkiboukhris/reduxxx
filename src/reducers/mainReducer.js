const Main =(state=[],action)=>{
    if (action.type==='ADD_INPUT') {
        return state=[...state,action.value]
    }
    if (action.type==='REMOVE_INPUT') {
        return state.filter(el=>el.id!==action.id)
    }
    if (action.type==='EDIT_TASK') {
        let tab=state.filter(el=>el.id!==action.value.id)
        return state=[...tab,action.value]
        
    }
    if (action.type==='TASKisDONE') {
        let idx=state.findIndex(el=>el.id===action.value)
        state[idx].isDone=!state[idx].isDone
        console.log(state[idx].isDone)
        return state
    }
    if (action.type==='KEYSEARCH') {
        return state.filter(el=>el.InputValue.toUpperCase().includes(action.value.toUpperCase()))
    }
    if (action.type==='DONESEARCH') {
        return state.filter(el=>el.isDone===true)
    }
    return state
};
export default Main;