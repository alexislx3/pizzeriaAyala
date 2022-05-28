/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemsListContainer/ItemsListContainers';
function App() {
  return (
    <div className="App">
<NavBar />
<ItemListConteiner greeting= 'Pizzeria Ayala' />
    </div>
  );
}

export default App;
