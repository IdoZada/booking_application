import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home'
import NavbarComponent from "./components/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
        <NavbarComponent></NavbarComponent>
       <Routes>
          <Route path="/" element={<Home/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
