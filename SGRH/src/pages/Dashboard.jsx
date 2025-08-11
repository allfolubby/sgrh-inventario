import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>Bienvenido a SGRH Inventario</Typography>
        <Button variant="contained" onClick={() => navigate('/inventario')}>Ver Inventario</Button>
      </Box>
    </Container>
  )
}