import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { NavBar, Item } from './components';

//Etiquetas de apertura y de cierre <div> </div> o auto cierre <img />
//className en lugar de class
//Se escribe JavaScrpt con {}
//Eventos y estilos en camelCase


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <div className='container'>
          <Item />
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite and</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  )
}

export default App
