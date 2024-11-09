import { useChatContext } from "../context/ChatContext";

function DeleteButton({ styleClass }) {
  const { deleteLocalStorageData } = useChatContext();
  function handleClick() {
    const res = confirm("Are you want to delete all your previous chats?");
    if (res) deleteLocalStorageData();
  }
  return (
    <button onClick={handleClick} className={styleClass}>
      Delete My Data
    </button>
  );
}

export default DeleteButton;
