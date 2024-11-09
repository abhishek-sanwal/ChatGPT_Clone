import { createContext, useContext, useEffect, useReducer } from "react";

import { sendMsgToGeminiAI } from "../gen-ai/gemini";
import useLocalStorage from "../hooks/useLocalStorage";

const chatContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setMessages":
      return { ...state, messages: action.payload };

    case "setOldChats":
      return { ...state, oldChats: action.payload };

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
      if (state.oldChats.includes(action.payload)) {
        return {
          ...state,
          messages: [],
        };
      }

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
    case "reset":
      return {
        ...state,
        oldChats: [],
        messages: [],
      };
    default:
      return state;
  }
}

function ChatContextProvider({ children }) {
  const [newMessages, setNewMessages] = useLocalStorage({
    key: "messages",
    initialState: [],
  });

  const [newChats, setNewChats] = useLocalStorage({
    key: "oldChats",
    initialState: [],
  });

  const [{ messages, oldChats }, dispatch] = useReducer(reducer, {
    oldChats: newChats,
    messages: newMessages,
  });

  async function getResponse({
    question,
    response = "",
    startNewChat = false,
  }) {
    if (!question.trim()) return;

    dispatch(addMessage({ question, response }));

    const res = await sendMsgToGeminiAI({ question, startNewChat });

    // Add actual answer
    dispatch(
      updateMessage({
        question,
        response: res,
      })
    );
  }

  function deleteLocalStorageData() {
    dispatch(reset());
    localStorage.removeItem("messages");
    localStorage.removeItem("oldChats");
  }

  useEffect(
    function () {
      async function updateLocalStorage() {
        setNewMessages(messages);
        setNewChats(oldChats);
      }
      updateLocalStorage();
    },

    [messages, oldChats]
  );

  // Uncomment to ask for confirmation before closing window
  // useEffect(function () {
  //   function handleClose(event) {
  //     const message = " Are you sure you want to close this window? ";
  //     event.returnValue = message; // For modern browsers

  //     // For Old browsers.
  //     return message;
  //   }

  //   window.addEventListener("beforeunload", handleClose);

  //   return () => window.removeEventListener("beforeunload", handleClose);
  // }, []);

  return (
    <chatContext.Provider
      value={{
        messages,
        oldChats,
        dispatch,
        getResponse,
        deleteLocalStorageData,
      }}
    >
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

// Action Creators //

function setMessages(messages) {
  return {
    type: "setMessages",
    payload: messages,
  };
}

function setOldChats(oldChats) {
  return {
    type: "setOldChats",
    payload: oldChats,
  };
}

function addMessage(obj) {
  return {
    type: "addMessage",
    payload: obj,
  };
}

function updateMessage(message) {
  return {
    type: "updateMessage",
    payload: message,
  };
}

function addChat(chat) {
  return {
    type: "addChat",
    payload: chat,
  };
}

function setChat(chat) {
  return {
    type: "setChat",
    payload: chat,
  };
}

function deleteChat(chat) {
  return {
    type: "deleteChat",
    payload: chat,
  };
}

function reset(chat) {
  return {
    type: "reset",
  };
}

// Named Exports
export {
  useChatContext,
  ChatContextProvider,
  setMessages,
  setOldChats,
  addChat,
  setChat,
  deleteChat,
  addMessage,
  updateMessage,
  reset,
};
