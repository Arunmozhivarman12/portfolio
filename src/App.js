
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Skills from './skills';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Nopage from './Nopage';
import { ThemeProvider } from './Themecontext';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Nopage/>} />
        </Routes>
        <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

