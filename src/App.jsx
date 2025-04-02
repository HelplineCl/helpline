import { useState } from 'react'
import Features from './components/Features'
import './App.css'
import CustomMenu from './components/CustomMenu'
import Hero from './components/Hero'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GradientBackgroundSection from './components/GradientBackgroundSection'
import AboutSection from './components/AboutSection'
import Instagram from './components/Instagram'
import Footer from './components/Footer'


const theme = createTheme({
  palette: {
    primary: {
      main: '#0191B4', // Color principal (ejemplo: naranja)
      contrastText: '#fff', // Color del texto en botones primarios
    },
    secondary: {
      main: '#4caf50', // Color secundario (ejemplo: verde)
      contrastText: '#000', // Texto en botones secundarios
    },
  },
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>
        <CustomMenu/>
        <Hero/>
        <GradientBackgroundSection/>
        <AboutSection/>
        <Features/>
      </ThemeProvider>
      <Instagram/>
      <Footer/>
    </>
  )
}

export default App
