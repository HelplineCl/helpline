import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Container, AppBar, Toolbar, Stack, Avatar, AvatarGroup, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import cel from "/phone.png"
import heart from "/heart.png"
import rayas from "/rayas.svg"


const GetStartedButton = styled(Button)(({ theme }) => ({
  background: "primary",
  border: 0,
  borderRadius: 20,
  boxShadow: "0 3px 5px 2px rgba(74, 207, 178, 0.3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 10px 4px rgba(23, 183, 197, 0.3)",
  },
  transition: "all 0.3s ease-in-out",
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: "transparent",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


 
  return (
    <HeroSection>
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
                display: "inline",
                marginRight:"10px",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              mb: 3,
              background: "#000000",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ayuda a tu comunidad con
          </Typography>
            <div className="contenedor-help">
                <Typography
                variant="h1"
                component="h1"
                sx={{
                display: "inline",
                marginRight:"10px",
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 800,
                mb: 3,
                background: "#0191B4",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                }}
                >HelpLine
                </Typography>
                <img src={rayas} alt="rayas" className="rayas"/>
            </div>
          

          <br></br>
          <Typography
            variant="h1"
            component="h1"
            sx={{
                display: "inline",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              mb: 3,
              background: "#000000",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >la
          </Typography>
          <img src={cel} alt="Logo" style={{ width: "30px", height: "auto",marginLeft:"10px",marginRight:"10px" }}/>
          <Typography
            variant="h1"
            component="h1"
            sx={{
                display: "inline",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              mb: 3,
              background: "#000000",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >app de ayuda para personas damnificadas por incendios
          </Typography>
          <img src={heart} alt="corazon" style={{ width: "50px", height: "auto",marginLeft:"10px" }}/>

          <Box sx={{mt:6, mb: 6 }}>
            <GetStartedButton
              variant="contained"
              size="large"
              sx={{ mr: 2, mb: { xs: 0, sm: 0 } }}
            >
              Descárgala gratis
            </GetStartedButton>
          </Box>

        </motion.div>
      </Container>
    </HeroSection>
  );
};

export default Hero;