import { Box, Button, Container, Grid, Typography, Card, CardContent } from '@mui/material';


const Features = () => {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#000' }}>
      
      {/* Encabezado */}
      <Container sx={{ textAlign: 'center', py: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
          ¿De qué sirve la app?
        </Typography>
        <Typography variant="h6" sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: "2.5rem", md: "4rem" },
                }}>
          Características Top
        </Typography>
      </Container>

      {/* Sección de información */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Tarjeta 1 */}
          <Grid item xs={12} md={5}>
            <Card sx={{ bgcolor: '#00A5C4', color: '#fff', p: 2 }}>
              <CardContent>
                <Typography variant="body2" sx={{ 
                    fontWeight: 'bold',
                    bgcolor: '#FF7F50', px: 1, py: 0.5, borderRadius: 1, display: 'inline-block' }}>
                  Simple y efectiva
                </Typography>
                <Typography variant="h6" 
                sx={{ 
                    mt: 2,
                    fontWeight: 'bold', }}>
                  RED SOCIAL PARA COORDINAR DONACIONES
                </Typography>
                <Typography variant="body2" 
                sx={{ mt: 1 ,
                    fontWeight: 'regular',
                fontSize: { xs: "1rem", md: "1.5rem" },
                }}>
                  Creación de perfiles, mensajería, solicitudes y postulación de ayuda son algunas de las principales funciones que ofrece "Help Line".
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tarjeta 2 */}
          <Grid item xs={12} md={5}>
            <Card sx={{ bgcolor: '#00A5C4', color: '#fff', p: 2 }}>
              <CardContent>
                <Typography variant="body2" 
                sx={{ bgcolor: '#FF8C00', 
                fontWeight: 'bold',
                px: 1, py: 0.5, borderRadius: 1, display: 'inline-block' }}>
                  Donaciones Seguras con IA
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  CONTROL DE CALIDAD
                </Typography>
                <Typography variant="body2" 
                sx={{ 
                    mt: 1,
                    fontWeight: 'regular',
                    fontSize: { xs: "1rem", md: "1.5rem" },
                 }}>
                  Implementamos la IA para verificar que las donaciones estén en buen estado y recibir artículos realmente útiles, haciendo más ágil y efectiva esta muestra de solidaridad.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
};

export default Features;