import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Main from "./views/Main";
import Update from "./views/Update"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main></Main>}></Route>
          <Route exact path='/api/pets/update/:id' element={<Update/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
