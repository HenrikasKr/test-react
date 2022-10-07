import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
//Pages

import Home from "./components/Pages/Home/Home";
import Solutions from "./components/Pages/Solutions/Solutions"
import Sectors from "./components/Pages/Sectors/Sectors";
import Contacts from "./components/Pages/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/solutions" element={<Solutions />}/>
        <Route path="/sectors" element={<Sectors />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
