import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Typing from './Typing';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />

      </header>
      <Typing
          text={[
            "Hello, welcome to the typing effect demo!",
            "Enjoy exploring this cool effect!",
            "This is an example of typing and deleting text.",
          ]}
          typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
        
        />
    </div>
  );
}

export default App;
