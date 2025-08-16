import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Technologies from './components/Technologies/Technologies';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="fundo-site">
        <div className="container">
          <Hero />
          <Services />
          <Technologies />
          <Location />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;