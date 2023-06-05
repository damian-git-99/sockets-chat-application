export const ChatTypes = {
  loadUsers: '[Chat] Load Users',
  activateChat: '[Chat] activate chat'
}

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ChatTypes.loadUsers:
      return {
        ...state,
        users: [...action.payload]
      }
    case ChatTypes.activateChat:
      if (state.activeChat === action.payload) return state
      return {
        ...state,
        activeChat: action.payload,
        messages: []
      }
    default:
      return state
  }
}
