import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

import Dashboard from './dashboard/Dashboard';
import { fetchJobsFromApi } from './actions/api.actions';
import { setJdList } from './actions/actions';

import './App.css';

function App() {

  const dispatch = useDispatch();

 useEffect(()=> {
    const getJobsData = async () => {
      const data = await fetchJobsFromApi();
      dispatch(setJdList(data?.jdList));
    };
    getJobsData();
 }, [])


  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
