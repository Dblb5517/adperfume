import './App.css';
import BestSeller from './components/bestSeller/BestSeller';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Under from './components/under/Under';

function App() {
  return (
    <div className="App">
     <Header/>
     <Under/>
     <BestSeller />
     <Footer />
    </div>
  );
}

export default App;
