import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Item } from './components/Item/Item';
import { Home } from './pages/Home';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



//Etiquetas de apertura y de cierre <div> </div> o auto cierre <img />
//className en lugar de class
//Se escribe JavaScrpt con {}
//Eventos y estilos en camelCase

function App() {

  const handleCart = ((qty)=>{
    console.log('La cantidad es:', qty);
  })
  
  return (
      <div>
        <NavBar />
        <Home />
        {/* <div className='container'><ItemCount stock={10} onAdd={handleCart} /></div> */}
      </div>
  )
}

export default App
