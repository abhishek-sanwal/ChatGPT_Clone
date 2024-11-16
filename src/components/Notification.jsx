import 'react-toastify/dist/ReactToastify.css';

import { Toast, ToastContainer, toast } from 'react-toastify';

function Notification({ text }) {
  function notify() {
    toast({ text });
  }
  () => toast(text);
  return (
    <div>
      <ToastContainer containerId={crypto.randomUUID} />
    </div>
  );
}

export default Notification;
