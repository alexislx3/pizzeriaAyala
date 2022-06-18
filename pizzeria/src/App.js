/* import logo from './logo.svg'; */
/* import React,{useState} from 'react'; */
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
/* import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'; */
 import NavBar from './components/NavBar/NavBar'; 
import ItemListConteiner from './components/ItemsListContainer/ItemsListContainers';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
/* import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
 */ 


function App() {
  /* const [page, setPage] = useState ('detail') */


  return (
    <div className="App">
{/* {<NavBar /> }
{ <div>
  <button onClick={() => setPage ('list')}>list</button>
  <button onClick={() => setPage ('detail')}>detail</button>
</div>
 {page === 'list' && <ItemListConteiner greeting= 'Pizzeria Ayala' />}
{page === 'detail'&& <ItemDetailContainer/>}
  */}
 <BrowserRouter>
 <NavBar/>

 <Routes>
  <Route path='/' element={<ItemListConteiner  greeting= 'Pizzeria Ayala'/>} /> 
  <Route path='/category/:categoryId' element={<ItemListConteiner/>} /> 
  <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
