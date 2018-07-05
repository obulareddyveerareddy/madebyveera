export const ERR_401_UNAUTHORIZED  = "ERR_401_UNAUTHORIZED";

export function errorHandler(state = {}, action){
    switch(action.type){
        case ERR_401_UNAUTHORIZED:
            console.log('~~~~~~~~~~~ Saga ERR_401_UNAUTHORIZED ~~~~~~~~~~~', action);
            return action.error.response.data;
        default:
            return state;
    }
};