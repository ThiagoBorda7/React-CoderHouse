import './App.css';
import { NavBar, ItemCount, ItemListContainer, Item } from './components';
// import { Home } from './pages/Home';



//Etiquetas de apertura y de cierre <div> </div> o auto cierre <img />
//className en lugar de class
//Se escribe JavaScrpt con {}
//Eventos y estilos en camelCase

const handleCart = (cant) => {
  console.log('La cantidad es:', cant)
}

function App() {
  return (
      <div>
        <NavBar />
        {/* <Home /> */}
        {/* <ItemListContainer greeting={"Hola Mundo"} /> */}
        {/* <div>
          <ItemCount stock={10} onAdd={handleCart} />
        </div>  */}
      </div>
  )
}

export default App
