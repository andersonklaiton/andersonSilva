
import './App.css';
import Header from './components/header/header';
import Routes from './pages/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes/>
      </header>
    </div>
  );
}

export default App;
