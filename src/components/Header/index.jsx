import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import * as gtag from "../../lib/gtag";
import styles from "./styles.module.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Conheça nossa mágica",
      value: "Marcar consulta",
    });
  }

  function agendarConsultaMenu() {
    setShowMenu(false);
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Fale conosco",
      value: "Fale Conosco",
    });
  }

  return (
    <>
      <header className={styles.header}>
        <div className="mainContainer">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo_transparente.png"
                alt="Viva Imóveis"
                width="180"
                height="95"
              />
            </a>
          </Link>

          <button
            className={
              showMenu
                ? `${styles.btnMenuMobile} ${styles.menuOpen}`
                : styles.btnMenuMobile
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
            <span className={styles.iconHamburguer}></span>
          </button>

          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/produtos">
              <a>Tipos de Avaliação de Imóveis</a>
            </Link>
         

          </nav>

          <div className={styles.btnAgendar}>
            {/*  <li onClick={agendarConsultaMenu}>
              <Link href="https://wa.me/556293068692">
                <a target="_blank">Whatsapp</a>
              </Link>
          </li> */}
           {/*   <Button
              dark
              onClick={agendarConsulta}
              link="https://www.avaliadorimoveisgoias.com.br/produtos"
            >
               <img src="/icons/whatsIcon.svg" alt="whatsapp" />
             Fale Comigo no Whatswapp
          </Button> */}
          </div>
        </div>

        <nav
          className={
            showMenu
              ? `${styles.menuMobile} ${styles.active}`
              : styles.menuMobile
          }
        >
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/produtos">
                <a>Tipos de Avaliação de Imóveis</a>
              </Link>
            </li>
 
           
        {/*     <li onClick={agendarConsultaMenu}>
              <Link href="https://wa.me/556293068692">
                <a target="_blank">Whatsapp</a>
              </Link>
        </li>   */}
          </ul>
        </nav>
      </header>
    </>
  );
};
