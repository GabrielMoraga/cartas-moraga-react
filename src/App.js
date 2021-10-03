import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';

function App() {
 return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings='Lista de Artículos ...'/>
    </div>
  );
}

export default App;