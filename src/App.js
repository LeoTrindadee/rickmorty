import React from "react";
import { Container, Typography } from "@mui/material";
import CharacterCard from "./CharacterCard"; 

const App = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Personagens de Rick and Morty
      </Typography>
      <CharacterCard />
    </Container>
  );
};

export default App;
