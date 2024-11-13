import { ToastContainer, Toast, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Toast({ text }) {
  function notify() {
    toast({ text });
  }
  () => toast(text);
  return <div></div>;
}

export default Toast;
