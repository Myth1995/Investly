import type { NextPage } from 'next'
import styles from '../styles/Navbar.module.css'
import 'w3-css/w3.css'
import items from './navitems'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react'
import { style } from '@mui/system'



const boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const NavBar: NextPage = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.navbar}>
        <link
          href="https://fonts.googleapis.com/css2?family=Open:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <h1 className={styles.header}>Investly.</h1>
        <ul>
            {
            items.map((subitem, key)=>
            <li key={key} className={styles.item}>
                <img src={subitem.photoUrL} className={styles.image}></img>
                <div className={styles.title}>{subitem.title}</div>
            </li>
            )}
        </ul>
    </div>
  )
}

export default NavBar
