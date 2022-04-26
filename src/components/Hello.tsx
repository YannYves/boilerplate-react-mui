import { Button, Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../context/context";
import useFetch from "../hooks/useFetch";
import useFetchWithSwr from "../hooks/useFetchWithSwr";

function Hello() {
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(Context);

  return (
    <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Re-render
      </Button>
      <Typography variant='h2' component='h1' gutterBottom>
        {"React 18 + TypeScript + Material UI boilerplate "}
      </Typography>
      <Typography variant='h5' component='h2' gutterBottom>
        feature to add :
      </Typography>
      <Typography variant='body1'>Sticky footer placeholder.</Typography>
    </Container>
  );
}

export default Hello;
