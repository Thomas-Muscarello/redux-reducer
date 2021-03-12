export function managePresents(state, action){
    switch (action.type){
        //If the reducer receives a type set to "INCREASE", return a new state where the value of numberOfPresents is increased by one.
        case "INCREASE":
            return{numberOfPresents: state.numberOfPresents +1}
        default:
            return state
    }
}
