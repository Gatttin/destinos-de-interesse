import './App.css';
import Form from './components/Form';
import City from './components/City';
import Country from './components/Country';


function App() {

  
  return (
      <div className="App">
        <div>
          <h1 className="container-4">Bem Vindo ao Site!</h1>
        </div>
        <Form />
        <h2 className="container-6">Destinos de Interesse</h2>
        <Country />
        <City />
      </div>
  );
  
};


export default App;
