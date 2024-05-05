import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
    setLoading(false);
    dispatch(setJdList(data?.jdList));
  };
  useEffect(() => {
    if (loading && offset <= totalCount) {   
      setOffset((offset) => offset + LIMIT);
      getJobsData(offset + LIMIT, LIMIT);
    }
  }, [loading]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        document.documentElement.scrollHeight ===
        window.innerHeight + document.documentElement.scrollTop
      ) {
        setLoading(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="App">
      <Dashboard />
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default App;
