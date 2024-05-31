import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Typing from './components/Typing/Typing';
import Tile from './components/Tile/Tile';
import Banner from './components/Banner';
import Progress from './components/Progress';
import { useEffect, useState } from 'react';
function App() {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000)

    return () => clearInterval(interval);
  })
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
      <Tile
        header={"Class is going on "}
        subHeader={"Everyone is making a tile"}
        img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
        text={"Approved training partner under the scheme for market led fee-based services implemented by NSDC"}
        link={"https://www.scaler.com/"}
        linkText={"scaler"}
        position={"img-right"}
        bgColor={"red"}
      />
      {/* <Banner /> */}
      <Progress percentage={percentage}/>
    </div>
  );
}

export default App;


// import 
// ./NavBar.js
// ./NavBar.jsx
// ./NavBar/index.js