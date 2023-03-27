import './App.css';
import Pages from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register";
import './components/login.css';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
