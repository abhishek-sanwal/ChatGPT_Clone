import ActionButton from '../ActionButton/ActionButton';
import Logo from '../Logo/Logo';
import PreviousChats from '../PreviousChats/PreviousChats';

function SidebarUpper({ sidebar, setSidebar }) {
  return (
    <div>
      {/* Only show close menu button when it is open  */}
      {sidebar && (
        <button
          style={{
            position: 'absolute',
            color: '#fff',
            fontSize: '20px',
            right: '15px',
            top: '15px',
          }}
          onClick={() => setSidebar(false)}
          title='close menu'
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
