
import './App.css';
import FilmInfo from './Containers/FilmInfo';
import Naigation from './Containers/Naigation';
import SelectPerson from "./Containers/SelectPerson"



function App() {


  return (
    <div className="App">
      <Naigation></Naigation>
      <SelectPerson></SelectPerson>
      <FilmInfo></FilmInfo>
     
    </div>
  );
}

export default App;
