import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

function Landing() {
  return (
    <Container maxWidth='md'>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='text.primary'
        gutterBottom
      >
        Album layout
      </Typography>
      <Typography variant='h5' align='center' color='text.secondary' paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
      <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
        <Button variant='contained'>Main call to action</Button>
        <Button variant='outlined'>Secondary action</Button>
      </Stack>
    </Container>
  );
}

export default Landing;
