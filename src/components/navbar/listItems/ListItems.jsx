import React from 'react'
import { List, ListItem, ListItemText, Divider, Typography, Box  } from '@mui/material'
import { Link } from 'react-router-dom'
import { viewFood, createFood, createCombination } from '../../../routes'


export default function ListItems() {

  // Estilos de la lista
  const style = {
    width: '35vh',
    bgcolor: 'background.paper',
    gap:3
  };
  
  // Variable local la cual contiene la informacion del usuario
  const local = JSON.parse(localStorage.infoUser)

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <Box>
        <Typography variant="span">{local.firstName}</Typography>
        <Typography variant="span"> {local.lastName}</Typography>
      </Box>
      <Divider />
        <ListItem button>
          <Link to='/'>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
      <Divider />
      {/* Lista de comidas */}
      <ListItem button>
        <Link to={viewFood}>
          <ListItemText primary="Listado de comidas" />
        </Link>
      </ListItem>
      <Divider />
      {/* Crear comida */}
      <ListItem button divider>
        <Link to={createFood}>
            <ListItemText primary="Crear comidas" />
          </Link>
        </ListItem>
      <Divider light />
      {/* Crear combinacion */}
      <ListItem button>
        <Link to={createCombination}>
              <ListItemText primary="Crear combinacion" />
          </Link>
      </ListItem>
    </List>
  )
}
