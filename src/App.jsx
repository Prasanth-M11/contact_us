import './App.css';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <h1>Welcome to TheeYora Solutions</h1>
        <p>
          This is the main page of our application. Explore our services and get in touch with us!
        </p>
        <Link to="/contact" className="App-link">
          Go to Contact Us
        </Link>
      </header>
    </div>
  );
}

export default App;