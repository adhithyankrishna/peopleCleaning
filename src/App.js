import './App.css';
import LandingPage from './components/LandingPage';
import DeepClean from './components/DeepClean';
import Semi from './components/Semi';
import Jobs from './components/Jobs';
import Time from './components/Time';
import Employee from './components/Employee';
import Enq from './components/Enq';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <DeepClean />
      <Semi />
      <Jobs />
      <Time />
      <Employee />
      <Enq />
      <Footer />
    </div>
  );
}

export default App;
