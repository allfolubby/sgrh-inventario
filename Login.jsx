import React from 'react'
import { Button, TextField, Container, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulación de login (para la demo)
    navigate('/dashboard')
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" mb={3}>SGRH - Iniciar Sesión</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Correo electrónico"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Entrar</Button>
        </form>
      </Box>
    </Container>
  )
}