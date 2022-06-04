
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';


function App() {
  return (
    <Router>
      
      <Header/>
      <Home/>
      <Footer/>

      
    
    
   
    
   </Router>
    
      
    
  );
}

export default App;
