import './App.css';
import { NavBar, ItemCount, ItemListContainer, Item } from './components';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Category } from './pages/Category';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { CartProvider } from './state/Cart.context';
import { ThemeProvider } from './state/Theme.context';

//Etiquetas de apertura y de cierre <div> </div> o auto cierre <img />
//className en lugar de class
//Se escribe JavaScrpt con {}
//Eventos y estilos en camelCase

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element = {<NavBar />} >
      <Route path = '/' element = {<Home />} /> 
      <Route path = '/item/:id' element = {<Detail />} />
      <Route path = '/categoria/:id' element = {<Category />} />
    </Route>
  ));
  
  return (
      <div>
        <ThemeProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ThemeProvider>
      </div>
  )
}

export default App
