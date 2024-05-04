import React, {useEffect} from 'react';
import './App.css';
import { fetchJobsFromApi } from './actions/api.actions';

function App() {

 useEffect(()=> {
    const getJobsData = async () => {
      const data = await fetchJobsFromApi();
      console.log('data: ', data);
    };
    getJobsData();
 }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
