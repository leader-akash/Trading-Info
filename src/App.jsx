import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import StrategyCards from './components/Card';
import NavSections from './components/NavSections';

function App() {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/strategies')
      .then(response => {
        setStrategies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="min-h-screen py-5 px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#38e964] mb-10">
        Copy top performing technical indicator strategies for short-term tradings
      </h1>

      <NavSections />

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {strategies.map((strategy) => (
          <StrategyCards key={strategy.id} strategy={strategy} />
        ))}
      </div>

    </div>
  );
}

export default App;

