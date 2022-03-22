import Nav from './components/nav/Nav';
import Hero from './sections/hero/Hero';
import Services from './sections/services/Services';
import About from './sections/about/About';
import Gallery from './sections/gallery/Gallery';


import './App.css';

function App() {
  return (
    <div className="app w-full">
      <Nav />
      <div className='app-content'>
        <Hero />
        <Services />
        <About />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
