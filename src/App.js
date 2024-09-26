import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import About from "./components/about/About"
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <Router>
      <div className='p-14 md:p-20 xl:px-96 space-y-20'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
