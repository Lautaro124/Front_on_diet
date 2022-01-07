import React from 'react'
import { Container, Box, Typography, Grid } from '@mui/material'
import { textHome } from '../../utils/texts'

export default function About() {
  return (
    <Container fixed>
      <Box>
        <Grid spacing={2}>
          <Typography variant='h4'>¿Que hacemos?</Typography>
          <Typography variant='span' component='div'>{textHome.description}</Typography>
          <Typography variant='h5' component='div'>{textHome.contactUs}</Typography>
        </Grid>
      </Box>
    </Container>
  )
}
