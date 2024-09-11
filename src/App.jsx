import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import StrategyCards from './components/Card';
import NavSections from './components/NavSections';

function App() {
  const [strategies, setStrategies] = useState([]);


  // mock json server will not run on deployment site because it will run on localhost, so i used the json from public folder for deployment purpose. Although i have commented the code for mock server if we use json mock api

  const fetchData = async() => {
    try{
      const res = await axios.get('/data/db.json') // for deployment purpose only
      setStrategies(res?.data?.strategies)
    }
    catch(err){
      console.log('error', err)
    }
  }

  // If we use mock json server api in local, Run json server before use
  // json-server --watch db.json --port 5000

  // const fetchData = async() => {
  //   try{
  //     const res = await axios.get("http://localhost:5000/strategies") // localhost:5000
  //     setStrategies(res?.data)
  //   }
  //   catch(err){
  //     console.log('error', err)
  //   }
  // }

  useEffect(() => {
    fetchData();
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

