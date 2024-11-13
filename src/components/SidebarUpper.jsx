import ActionButton from "./ActionButton";
import Logo from "./Logo";
import { MdClose } from "react-icons/md";
import PreviousChats from "./PreviousChats";

function SidebarUpper({ sidebar, setSidebar }) {
  return (
    <div>
      {/* Only show close menu button when it is open  */}
      {sidebar && (
        <button
          style={{
            position: "absolute",
            color: "#fff",
            fontSize: "20px",
            right: "15px",
            top: "15px",
          }}
          onClick={() => setSidebar(false)}
          title="close menu"
        >
          X
        </button>
      )}
      <Logo />
      <ActionButton />
      <PreviousChats />
    </div>
  );
}

export default SidebarUpper;
