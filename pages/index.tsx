import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'w3-css/w3.css'
import items from './items'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react'
import NavBar from './navbar'

const Home: NextPage = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.con}>
      <NavBar />
      
    </div>
  )
}

export default Home
