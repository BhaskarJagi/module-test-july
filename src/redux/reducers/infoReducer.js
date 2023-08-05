import { SELECTED_POST } from "../actions/actionTypes";


const initialState = null

const infoReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECTED_POST:
            return action.payload
        default:
            return state
    }
}

export default infoReducer  