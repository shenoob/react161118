import axios from "axios";

export const fetchStart=()=>{
    return {
        type:"FETCH_START"
    }
}
export const fetchSuccess=(users)=>{
    return {
        type:"FETCH_SUCCESS",
        payload:users
    }
}
export const fetchError=(error)=> {
    return {
        type:"FETCH_ERROR",
        payload:error
    }
}
export const fetchUsers=()=>{
    return dispatch=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=> {
        dispatch(fetchSuccess(res.data));

    })
    .catch((err) => {
        dispatch(fetchError(err))
    })
}
}