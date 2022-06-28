import React from 'react';
import styles from './Header.module.css'
import igniteLogo from "../assets/logo-ignite.svg"

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header className={styles.header} >
      <img src={igniteLogo} />
    </header>
  )
}

export default Header;