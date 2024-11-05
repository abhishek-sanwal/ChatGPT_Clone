import ActionButton from "./ActionButton";
import Logo from "./Logo";
import Suggestions from "./Suggestions";
import { useRef } from "react";

function SidebarUpper({ sideBarUpper, logo, actionButton }) {
  // const sideBarUpper = useRef();
  return (
    <div>
      <Logo />
      <ActionButton />
      <Suggestions />
    </div>
  );
}

export default SidebarUpper;
