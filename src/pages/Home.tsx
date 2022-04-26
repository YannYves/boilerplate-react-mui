import { Grid } from "@mui/material";
import React from "react";
import Form from "../components/Form";
import Hello from "../components/Hello";
import Landing from "../components/Landing";
import List from "../components/List";
import useFetch from "../hooks/useFetch";
import Layout from "../layout/Layout";

function Home() {
  const { data, loading, error } = useFetch("https://randomuser.me/api");

  return (
    <Layout>
      <Grid container component='main'>
        <Hello />
        <Landing />
        <List />
        <Form />
      </Grid>
    </Layout>
  );
}

export default Home;
