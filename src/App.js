import YouTube from "react-youtube";
import './App.css';
import Hello from './component/Hello';
import logo from './component/test.png';


function App() {
  const na = "minb__m";
  const user = {
    na : "김민범"
  }
  return (
    
    <div className="App">
      
      <h1
        style = {{
          color : "#f0f",
          backgroundColor : "blue"
        
        }
      }
      >
        <p>나는, {na}</p>
        <p>정말로, {user.na}</p>
        
      </h1>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height = '100px' width = '300px' />
        <p>
          hello 안녕 haha
        </p>
        <Hello />

        <YouTube
            videoId = "oH0wEZ01_0M"
            opts={{
                width: "100%",
                height: "150px",
                playerVars: {
                autoplay: 1, //자동 재생 여부 
                loop: 1, //반복 재생
                },
            }}
        />
        
        <a
          className="App-link"
          href="https://yeezy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          buy yeezy
        </a>
        
      
      </header>
    </div>
  );
}

export default App;
