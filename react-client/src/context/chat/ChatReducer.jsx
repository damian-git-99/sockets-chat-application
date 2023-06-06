export const ChatTypes = {
  loadUsers: '[Chat] Load Users',
  activateChat: '[Chat] activate chat',
  newMessage: '[Chat] new message'
}

/*
  Chat State
  {
    userId: '',
    activeChat: null, // id of the user to whom I want to send messages
    users: [],
    messages: []
  }
*/

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
    case ChatTypes.newMessage:
      if (state.activeChat === action.payload.from ||
          state.activeChat === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        }
      }

      return state

    default:
      return state
  }
}
