import React from "react";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import celulares from "/celulares.png"

const GradientSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  background: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const ImageContainer = styled(motion.div)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "300px"
  },
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: "450px"
  }
}));

const ResponsiveImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)"
  }
});

const GradientBackgroundSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?fit=crop&w=800";
  };

  return (
    <GradientSection>
      
      <Container maxWidth="lg">
        <ImageContainer
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveImage
            src={celulares}
            alt="Colorful abstract design"
            loading="lazy"
            onError={handleImageError}
          />
        </ImageContainer>
      </Container>
    </GradientSection>
  );
};

export default GradientBackgroundSection;