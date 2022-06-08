import React from 'react'
import styles from '../styles/Layout.module.css'
import { Nav } from './Nav'
import Header from './Header'

export const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {children}
        
        </main>
    </div>
    </>
    
  )
}
