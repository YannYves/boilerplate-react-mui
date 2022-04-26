import { Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../context/context";

function Hello() {
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(Context);

  return (
    <Container sx={{ mt: 8, mb: 2, width: "100%" }}>
      <Typography variant='h2' component='h1' gutterBottom align='center'>
        {"React 18 + TypeScript + Material UI boilerplate "}
      </Typography>
      <Typography variant='h5' component='h2' gutterBottom align='center'>
        feature to add :
      </Typography>
      <Typography variant='body1' align='center'>
        ?
      </Typography>
    </Container>
  );
}

export default Hello;
