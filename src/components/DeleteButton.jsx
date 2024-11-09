import { useChatContext } from "../context/ChatContext";

function DeleteButton({ styleClass }) {
  const { deleteLocalStorageData } = useChatContext();
  return (
    <button onClick={deleteLocalStorageData} className={styleClass}>
      Delete My Data
    </button>
  );
}

export default DeleteButton;
