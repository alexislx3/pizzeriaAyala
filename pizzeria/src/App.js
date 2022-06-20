/* import logo from './logo.svg'; */
import './App.css';
 import NavBar from './components/NavBar/NavBar'; 
import ItemListConteiner from './components/ItemsListContainer/ItemsListContainers';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
/*   const [page,setPage] = useState('list') */
  return (

    <div className="App">
{/* <div>
  <button onClick={() => setPage ('list')}>List</button>
  <button onClick={() => setPage('detail') }>Detail</button>
</div>
{page === 'list'&&<ItemListConteiner greeting= 'Pizzeria Ayala' />}
{page === 'detail'&&<ItemDetailContainer/>} */}
<BrowserRouter>
 <NavBar /> 
<Routes>
  <Route path='/'element={<ItemListConteiner  greeting= 'Pizzeria Ayala' />}/>
  <Route path='/category/:categoryId'element={<ItemListConteiner/>}/>
  <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
