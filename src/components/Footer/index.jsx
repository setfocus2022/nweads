import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Footer = ({ children, link = "/" }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`mainContainer ${styles.footerWrap}`}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/icons/footer.png"
                alt="Logo"
                width="280"
                height="180"
              />  
            </a>
          </Link>

          <div>
            <h3>Viva Imóveis</h3>
            <ul>
              <li> 62 9306-8692 </li>
              <li>https://www.avaliadorimoveisgoias.com.br/</li>
              <li></li>
              <li>Aparecida de Goiânia, Goiás</li>

              <li className={styles.social}>
              <Link href="https://www.facebook.com/Vivalugarderealizar/">
                  <a target="_blank">
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>

              </li>

             

            {/*     <li className={styles.social}>
                <Link href="https://www.instagram.com/vivafelizimoveis/">
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
               
                <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link> 
              </li>*/}
            </ul>
          </div>

          <div>
            <h3></h3>
            <p> </p>
            <p></p>
          </div>

          <div>
            <h3>     </h3>
            <p>   </p>
            <p></p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2024 © Viva Imóveis. Todos os direitos reservados.
      </p>
    </>
  );
};
