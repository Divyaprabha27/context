import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Cart />
      <Home />
    </div>
  );
}

export default App;
