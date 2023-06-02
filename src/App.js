
import './App.css';
import Navbar from './components/Navbar';
import Fronte from './Fronte';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Header from './components/Header'
import Contact from './components/Contact';
function App() {
  
  return (
 <>
 <Router>
<Navbar />

<Routes>
  <Route path = "/" element ={<Fronte/>}></Route>
  <Route path = "/Header" element ={<Header/>}></Route>
  <Route path = "/Contact" element = {<Contact/>}></Route>
</Routes>



 </Router>

 
 </>
  );
}

export default App;
