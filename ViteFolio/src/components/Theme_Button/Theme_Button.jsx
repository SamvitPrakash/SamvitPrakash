import './Theme_Button.css';

const ThemeButton = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button id='theme-button' className={isDarkMode ? 'dark-mode' : 'light-mode'} onClick={toggleDarkMode}>
      {/* {isDarkMode ? 'Light Mode' : 'Dark Mode'} */}
    </button>
  );
};

export default ThemeButton;