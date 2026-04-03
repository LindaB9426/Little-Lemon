
import './App.css';
import "./Components/Footer";
import "./Components/Header";
import "./Components/Main";
import "./Components/Nav";

function App() {
  return (
    <nav className="App">
      <header className="App-header">
        <img src="/images/logoL.jpg" className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><a href="/home">Homepage</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>  
          </ul>

        </nav>
         
      </header>
      <main></main>
      <footer></footer>
    </nav>
  );
}

export default App;
