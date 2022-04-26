import type { NextPage } from 'next'
import styles from '../styles/Navbar.module.css'
import 'w3-css/w3.css'
import items from './navitems'
import React from 'react'

const avatar = "/images/avatar/image.png";

const NavBar: NextPage = () => {

  return (
    <div className={styles.navbar}>
        <link
          href="https://fonts.googleapis.com/css2?family=Work Sans:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <h1 className={styles.header}>Investly.</h1>
        <ul>
            {
            items[0].item.map((subitem, key)=>
            <li key={key} className={styles.item}>
                <img src={subitem.photoUrL} className={styles.image}></img>
                <div className={styles.title}>{subitem.title}</div>
            </li>
            )}
        </ul>

        <ul className={styles.navBottom}>
            {
            items[1].item.map((subitem, key)=>
            <li key={key} className={styles.item}>
                <img src={subitem.photoUrL} className={styles.image}></img>
                <div className={styles.title}>{subitem.title}</div>
            </li>
            )}
            <li className={styles.item}>
                <img src={avatar} className={styles.avatar} />
                <div>
                    <div className={styles.userName}>Louise Thompson</div>
                    <div className={styles.userInfo}>Enterprise Plan</div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
