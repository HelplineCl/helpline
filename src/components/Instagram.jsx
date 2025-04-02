import React from 'react'
import { Box, Button, Container, Grid, Typography} from '@mui/material';
import rayas from "/rayas.svg";
import { Link } from 'react-router-dom';


export default function Instagram() {
  return (
    <div>
         <Container>
            <Box textAlign="center" sx={{ flexGrow: 1, p: 2,m:10 }}>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: "2.5rem", md: "4rem" },
                }}>
            Síguenos en{' '}
            <div className="contenedor-help">
                            <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                            display: "inline-block",
                            marginRight:"10px",
                            fontSize: { xs: "2.5rem", md: "4rem" },
                            fontWeight: 800,
                            mb: 3,
                            background: "#0191B4",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            }}
                            >Instagram
                            </Typography>
                            <img src={rayas} alt="rayas" className="rayas"/>
                        </div>
            para estar al tanto de más noticias
                    </Typography>
                    <Button variant="contained" 
                    sx={{ mt: 2, bgcolor: '#0089A1', ':hover': { bgcolor: '#FE7A15' } }}>
                        <Link className='boton-link' to="https://www.instagram.com/help_line2025/"> Seguir</Link>
                    </Button>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}
