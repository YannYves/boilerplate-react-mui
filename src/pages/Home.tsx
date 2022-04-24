import { Grid } from "@mui/material";
import React from "react";
import Hello from "../components/Hello";
import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch("https://randomuser.me/api");

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      <Hello />
    </Grid>
  );
}

export default Home;
