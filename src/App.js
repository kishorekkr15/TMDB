import Login from "./Pages/Login";    
import Moviedata from "./Pages/Moviedata";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./Pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/moviesdata" element={<Moviedata/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
