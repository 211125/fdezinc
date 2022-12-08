import logo from './logo.svg';
import './App.css';
import Ofresemos from './comtroler/Ofresemos';
import Reloj from './comtroler/Reloj';
import Portada from './comtroler/Portada';

function App() {
  return (
    <div >
      <header >

        <Portada/>
      <Reloj/>
      <Ofresemos/>
      
      </header>
    </div>
  );
}

export default App;
