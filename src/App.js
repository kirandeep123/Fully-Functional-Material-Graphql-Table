import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "./Header";
import Main from "./Main";
export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Header content="SearchMetrics GMBH Coding Task" />
        <Main />
      </Box>
    </Container>
  );
}
