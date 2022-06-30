import React from 'react';
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react";


// import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=50" />

      <div className={styles.profile} >
        <img className={styles.avatar} src="https://github.com/lujuste.png" />
        <strong className={styles.nameUser} >Lucas Juste</strong>
        <span className={styles.employee} >Web Developer</span>
      </div>

      <footer className={styles.footerRox}>
        <a className={styles.buttonEditProfile} href={"#"} >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;