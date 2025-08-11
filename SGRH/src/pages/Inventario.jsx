import React from 'react'
import { Container, Typography, Box } from '@mui/material'

export default function Inventario() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>Inventario Actual</Typography>
        <Typography>Pronto verás aquí la lista de artículos y sus movimientos.</Typography>
      </Box>
    </Container>
  )
}