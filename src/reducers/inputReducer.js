const Input =(state='',action)=>{
    if (action.type==='SETINPUT') {
        return action.value
    }
    return state
};
export default Input;