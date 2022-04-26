import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React from 'react'
import NavBar from './navbar'
import MainContent from './maincontent'

const Home: NextPage = () => {

  return (
    <div className={styles.con}>
      <NavBar />
      <MainContent />
    </div>
  )
}

export default Home
