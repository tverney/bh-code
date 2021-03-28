import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Breadcrumbs,
  Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './Layout.module.css'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static" elevation={0} className={styles.header}>
        <Toolbar>
          <IconButton edge="start" color="secondary">
            <MenuIcon />
          </IconButton>
          <Link className={styles.link} href="/">
            Test
          </Link>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb}>
          <Link href="/">
            <span className={styles.link}>Home</span>
          </Link>
          <Typography color="textPrimary">Exercise</Typography>
        </Breadcrumbs>
      </Container>
      <main className={styles.mainContainer}>{children}</main>
    </>
  )
}

export default Layout
