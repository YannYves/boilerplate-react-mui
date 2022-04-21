import { Grid } from "@mui/material";
import React from "react";
import Hello from '../components/Hello';


function Home() {
  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      <Hello />
    </Grid>
  );
}

export default Home;
