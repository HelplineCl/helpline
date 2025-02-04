import React from "react";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import celulares from "/celulares.png"

const GradientSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  background: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const GradientCircle = styled(Box)(({ position, theme }) => ({
  position: "absolute",
  width: "50vw",
  height: "50vw",
  borderRadius: "50%",
  opacity: 0.6,
  filter: "blur(60px)",
  transition: "all 0.3s ease-in-out",
  ...(position === "top" && {
    background: "radial-gradient(circle, rgba(100,181,246,0.8) 0%, rgba(100,181,246,0) 70%)",
    top: "-25vw",
    left: "-25vw",
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
      height: "70vw",
      top: "-35vw",
      left: "-35vw"
    }
  }),
  ...(position === "bottom" && {
    background: "radial-gradient(circle, rgba(156,39,176,0.8) 0%, rgba(156,39,176,0) 70%)",
    bottom: "-25vw",
    right: "-25vw",
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
      height: "70vw",
      bottom: "-35vw",
      right: "-35vw"
    }
  })
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
      <GradientCircle position="top" />
      <GradientCircle position="bottom" />
      
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