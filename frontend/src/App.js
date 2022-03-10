import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Products/>
      <div className="final-about" style={{background:" linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 100%)"}}>
      With Diana, you’re in control of your health, your every day, and your story.
      </div> 
      <Contact/>
    </>
  );
}

export default App;
