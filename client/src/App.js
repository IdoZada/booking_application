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
          {/* <Route path="#rooms" element={<List/>}/>
          <Route path="#rooms2" element={<Rooms/>}/> */}
       </Routes>
    </BrowserRouter>
   

  );
}

export default App;
