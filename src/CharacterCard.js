import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const fetchCharacters = async () => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar personagens", error);
    return [];
  }
};

const CharacterCard = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    loadCharacters();
  }, []);

  return (
    <Grid container spacing={4} justifyContent="center">
      {characters.length === 0 ? (
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          sx={{ width: "100%" }}
        >
          Nenhum personagem encontrado.
        </Typography>
      ) : (
        characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#000", // Fundo preto
                color: "#fff", // Texto branco
                borderRadius: "12px", // Bordas arredondadas
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)", // Sombra sutil
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {character.name}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: character.status === "Alive" ? "green" : "red",
                      marginRight: 1,
                    }}
                  />
                  <Typography variant="body2" color="#ccc">
                    Status: {character.status === "Alive" ? "Vivo" : "Morto"}
                  </Typography>
                </Box>
                <Typography variant="body2" color="#ccc">
                  Raça: {character.species}
                </Typography>
                <Typography variant="body2" color="#ccc">
                  Origem: {character.origin.name || "Desconhecida"}
                </Typography>
                <Typography variant="body2" color="#ccc">
                  Localização: {character.location.name || "Desconhecida"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CharacterCard;
