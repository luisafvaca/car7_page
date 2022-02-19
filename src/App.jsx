import Nav from './components/nav/Nav';
import Hero from './sections/hero/Hero';
import Services from './sections/services/Services';
import About from './sections/about/About';

import './App.css';

function App() {
  return (
    <div className="App w-full">
      <Nav />
      <Hero />
      <Services />
      <About />
    </div>
  );
}

export default App;
