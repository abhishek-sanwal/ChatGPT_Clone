import { createContext, useContext, useReducer } from "react";

const chatContext = createContext();

const initialState = {
  messages: [],
  oldChats: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addMessage":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            question: action.payload.question,
            response: action.payload.response,
          },
        ],
      };

    case "updateMessage":
      const newMessages = state.messages.map((msg) =>
        msg.question === action.payload.question
          ? {
              question: action.payload.question,
              response: action.payload.response,
            }
          : msg
      );
      return { ...state, messages: newMessages };

    case "addChat":
      return {
        ...state,
        messages: [],
        oldChats: [...state.oldChats, action.payload],
      };

    case "setChat":
      return {
        ...state,
        messages: action.payload,
      };
    case "deleteChat":
      return {
        ...state,
        oldChats: state.oldChats.filter(
          (oldChat) => oldChat !== action.payload
        ),
      };

    default:
      throw new Error(" Invalid action type!!");
  }
}

function ChatContextProvider({ children }) {
  const [{ messages, oldChats }, dispatch] = useReducer(reducer, initialState);

  return (
    <chatContext.Provider value={{ messages, oldChats, dispatch }}>
      {children}
    </chatContext.Provider>
  );
}

function useChatContext() {
  const context = useContext(chatContext);
  if (context === undefined) {
    throw new Error(
      "ChatContext Called in parent component. If needed shift to parent"
    );
  }
  return context;
}

export { useChatContext, ChatContextProvider };
