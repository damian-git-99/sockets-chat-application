export const ChatTypes = {
  loadUsers: '[Chat] Load Users'
}

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ChatTypes.loadUsers:
      return {
        ...state,
        users: [...action.payload]
      }
    default:
      return state
  }
}
