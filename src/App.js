
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServiceDescription from './components/ServiceDescription';
import DetailedServiceDescription from './components/DetailedServiceDescription';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <ServiceDescription/>
      <DetailedServiceDescription/>
    </div>
  );
}

export default App;
