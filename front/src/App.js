
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Todos from './components/todos';

function App() {
  return (
    <div className="App">
       <Home/>
<Routes>

        <Route exact path="/todos" element={<Todos />} />
      </Routes>

    </div>
  );
}

export default App;
