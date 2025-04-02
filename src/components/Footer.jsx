import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import logoblanco from "/logoblanco.svg";
import {Container} from '@mui/material';

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <Box sx={{ bgcolor: '#00A5C4', textAlign: 'center', py: 3, color: '#fff' }}>
        <img src={logoblanco} alt="Logo" style={{ width: "250px", height: "auto" }} />
        <Typography 
        sx={{
            color: "#fff"
            }}
             variant="body2">Helpline 2025 copyright {"\u00A9"} Todos los derechos reservados</Typography>
      </Box>
    </div>
  );
}
