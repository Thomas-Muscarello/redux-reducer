export function manageFriends(state, action){
    switch (action.type) {
        //This time, the reducer should be able to handle two actions, "ADD_FRIEND" and "REMOVE_FRIEND".
        case "ADD_FRIEND":
            //When our reducer receives "ADD_FRIEND", it should return a new state with this friend object added to the friends array
          return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            //When removing a friend, instead of an object, the action will include an id key with an integer. Find the friend with the matching id and remove them. Thought of in another way, the reducer is really returning a new state with an array of friends that includes everyone except the removed friend.
          const index = state.friends.findIndex(friend => friend.id === action.id) 
          return (
            {...state,
                friends: [
                  ...state.friends.slice(0, index),
                  ...state.friends.slice(index + 1)
                ]
            }
          )
        default:
          return state
      }
}
