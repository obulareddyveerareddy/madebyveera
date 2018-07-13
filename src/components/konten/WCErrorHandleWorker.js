export const ERR_401_UNAUTHORIZED  = "ERR_401_UNAUTHORIZED";

export function errorHandler(state = {}, action){
    switch(action.type){
        case ERR_401_UNAUTHORIZED:
            return action.error.response.data;
        default:
            return state;
    }
};