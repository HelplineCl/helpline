import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";


const fotos = [
    {
        url:"./logo1.png"
    },
    {
        url:"./logo2.png"
    },
    {
        url:"./logo3.png"
    }
    ,{
        url:"./logo4.png"
    }
]
const AboutSection = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Lado Izquierdo - Fondo Naranja */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: "#FF7F2A",
                color: "white",
                p: 4,
                borderRadius: "20px",
                position: "relative", // Asegúrate de que este Box tenga position: relative
                zIndex: 2, // Asegúrate de que el Box naranja tenga un z-index bajo
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  display: "inline-block",
                  mb: 1,
                }}
              >
                Sobre nosotras
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: "bold", 
                  lineHeight: 1.3,
                  marginBottom:"40px"
                }}
              >
                Creamos esta app como parte del concurso{" "}
                <span style={{ fontWeight: "bold", }}>
                  "Technovation Girls"
                </span>{" "}
                en su edición 2025
              </Typography>
              {/* Estrella decorativa */}
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "-30px",
                  width: "80px",
                  height: "80px",
                  bgcolor: "#00AFC1",
                  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            </Box>
          </Grid>

          {/* Lado Derecho - Texto + Imagen */}
          <Grid item xs={12} md={6}>
            <Typography 
              sx={{ color: "#333", mb: 2, fontSize: { xs: "1rem", md: "2rem" } }}
            >
              Somos un grupo de adolescentes que participamos en el concurso de{" "}
              <strong>"Technovation Girls"</strong>, el cual impulsa a jóvenes mujeres a crear una
              app que sirva de ayuda a su comunidad. Y como resultado de esta instancia, fue que
              nació <strong>"Help Line"</strong>.
            </Typography>
          </Grid>
        </Grid>

        {/* Sección Inferior - Programas Utilizados */}
        <Box
          sx={{
            marginTop:"-30px",
            bgcolor: "#C3D500",
            p: 3,
            borderRadius: "0px",
            textAlign: "center",
            position: "relative", // Necesario para que el z-index funcione
            zIndex: 3, // Asegúrate de que el Box verde tenga un z-index más alto
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
            Programas utilizados para el desarrollo de nuestra app
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
            {/* Simulación de logos */}
            {fotos.map((foto, index) => (
              <Grid item key={index}>
                 <img
                            src={foto.url}
                            alt={`Foto ${index + 1}`}
                            loading="lazy"
                            style={{ width: "100px", height: "50px", objectFit: "contain", background:"#ffffff",padding:"3px 10px", borderRadius:"20px" }}
                          />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
