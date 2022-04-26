import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";

const Item = () => {
  interface LocationState {
    card: string;
  }

  const location = useLocation();
  console.log(location, "la");

  const { card } = location.state as LocationState;

  return (
    <Layout>
      <Grid container component='main'>
        <Container maxWidth='md'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            Focus page
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            paragraph
          >
            Card : {card}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Link to='/'>
              <Button variant='contained'>Home</Button>
            </Link>
          </Stack>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Item;
