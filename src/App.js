import './App.css';
//import linechart from './components/linechart';
import LineChart from './components/LineChart';

function App() {

  const mapaGto = 'https://www.codegto.gob.mx/wp-content/uploads/2017/01/MAPA-gto.png';

  return (
    <>
    <body>
      <div>
        <h1>covid 19 en gto</h1>
      </div>

      <div>
        <h2>casos confirmados y sospechosos en el municipio</h2>
        <LineChart />
      </div>

      <div>
        <h2>casos neg y defunc en el municipio</h2>
        <LineChart />
      </div>
      
      <h2>identificador de municipios</h2>
      <div>
        <img src={mapaGto} alt="mapa"/>
      </div>
    </body>
    </>
  );
}

export default App;
