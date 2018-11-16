const initialState={
    users:[],
    fetching:false,
    fetched:false,
    error:null
}
const usersReducer=(state=initialState,action) => {
    switch(action.type){
        case "FETCH_START":
            return {
                ...state,
                fetching:true
            }
            case "FETCH_SUCCESS":
            return{
                ...state,
                users:action.payload,
                fetching:false,
                fetched:true
            }
            case "FETCH_ERROR":
            return {
                fetched:false,
                fetching:false,
                error:action.payload
            }
            default:return state
    }
}
export default usersReducer;