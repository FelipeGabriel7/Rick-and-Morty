import './App.css';
import { Home } from './components/Home';
import {
  BrowserRouter as Container ,
  Routes,
  Route,
} from "react-router-dom";
import { Episodies } from './Pages/Episodies';
import { About } from './Pages/About';
import { EpisodiesAbout } from './Pages/EpisodiesAbout';
import { Location } from './Pages/Location';


function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/episodies/:name" element={<EpisodiesAbout/>}/>
          <Route path="/episodies" element={<Episodies/>}/>
          <Route path="/about"  element={<About/>} />
          <Route path="/locations" element={<Location/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
