import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Dashboard from "./dashboard/Dashboard";
import { fetchJobsFromApi } from "./actions/api.actions";
import { setJdList } from "./actions/actions";
import { LIMIT } from "./constants";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const getJobsData = async (offset, LIMIT) => {
    const data = await fetchJobsFromApi(offset, LIMIT);
    setTotalCount(data?.totalCount);
    dispatch(setJdList(data?.jdList));
    setLoading(false);
  };
  useEffect(() => {
    getJobsData(offset, LIMIT);
  }, []);
  
  const handleInfiniteScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    if(scrollHeight <= innerHeight+scrollTop && offset < totalCount){
      setLoading(() => true);
      setOffset(offset => offset+LIMIT);
      getJobsData(offset+LIMIT, LIMIT);
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, [])

  return (
    <div className="App">
      <Dashboard />
      { loading &&  <Box sx={{ display: 'flex', justifyContent:"center" }}>
      <CircularProgress />
    </Box>}
    </div>
  );
}

export default App;
