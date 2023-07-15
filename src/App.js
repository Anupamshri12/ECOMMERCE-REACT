
import './App.css';
import Navbar from './components/Navbar';
import Fronte from './Fronte';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Header from './components/Header'
import Contact from './components/Contact';
import DESCRIBE from './components/DESCRIBE';
import Login from './components/Login';
import Protected from './components/Protected';
function App() {
  
  return (
 <>
 <Router>
<Navbar />

<Routes>
  <Route path = "/" element ={<Fronte/>}></Route>
  <Route path = "/Header" element ={< Header/>}></Route>
  <Route path = "/Contact" element = {<Contact/>}></Route>
  <Route path = "/DESCRIBE-details/:id" element = {<DESCRIBE/>}></Route>
 
</Routes>



 </Router>

 
 </>
  );
}

export default App;
