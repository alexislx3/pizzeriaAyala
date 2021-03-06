import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemsListContainer/ItemsListContainers";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
/* import { useState, createContext } from "react"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './Context/CartContext';
import {NotificationProvider} from './Notification/Notification';


function App() {


  return (
    <div className="App">
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListConteiner greeting="Pizzeria Ayala" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListConteiner />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
             <Route path='/cart' element = {<h1>cart</h1>} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
        </NotificationProvider>
      
    </div>
  );
}

export default App;
