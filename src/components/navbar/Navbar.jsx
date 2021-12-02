import React, { useState } from 'react'
import { AppBar, Box ,Toolbar, Typography, Button, IconButton, SwipeableDrawer   } from '@mui/material'
import { Link } from 'react-router-dom'
import { createUser, getUser } from '../../routes'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from './listItems/ListItems'

export default function Navbar() {

  // Estado que define si el menu esta abierto o cerrrado
  const [ open, setOpen ]= useState(false)


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          {/* Despliegue de menu hamnburguesa */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={ ()=> setOpen(true)} />
            <SwipeableDrawer anchor="left" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
              <ListItem/>
            </SwipeableDrawer >
          </IconButton>
          {/* Logo o nombre del a empresa */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>
              Back on diet
            </Link>
          </Typography>

          {/* Botones de usuarios */}
          <Box>
            <Link to={getUser}>
              <Button color="inherit">
                  Login
              </Button>
            </Link>
            <Link to={createUser}>
              <Button color="inherit">
                  Register
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}