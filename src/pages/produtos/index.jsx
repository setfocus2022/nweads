import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Viva Imóveis Avalie | Avaliação de Imóveis - Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade</title>
        <meta
          name="description"
          content="Viva Imóveis Avalie | Avaliação de Imóveis Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade"
        />
        <meta
          name="keywords"
          content="Viva Imóveis Avalie | Avaliação de Imóveis Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade"
        />
        <meta name="author" content=" Viva Imóveis Avalie | Avaliação de Imóveis Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade " />
      </Head>

      <div>
        <HeaderPage subtitle="" title="  Viva Imóveis - Avaliação de Imóveis" />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/avalie.png"
            alt="Opinião Profissional de Valor"
            width="350"
            height="279"
            left
          />
          <h3> Opinião Profissional de Valor </h3>
          <div className={styles.description}>
            <p>
                    
          <p>Opinião Profissional de Valor é indicada para as pessoas que estão fazendo negócios entre particulares e querem saber quanto que vale o imóvel oferecido. É uma opinião de valor, por exemplo, você está comprando de um amigo e não tem noção se o valor oferecido está adequado, e deseja saber se não estão te passando um valor acima de mercado. Serve para qualquer transação particular sem valor judiciário. </p>
           <p></p>
           <p>Form de Contato</p>   
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
           
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/avalie.png"
            alt="Parecer Técnico de Avaliação Mercadológica"
            width="350"
            height="279"
          />
          <h3>Parecer Técnico de Avaliação Mercadológica </h3>
          <div className={styles.description}>
          <p>
           
        
          <p>Parecer Técnico de Avaliação Mercadológica, conhecido também como como PTAM, é um documento emitido por um profissional com formação na área, seja ele Engenheiro, Arquiteto ou Corretor de Imóveis com Certificação e Formação em Avaliação Imobiliária, título obtido através de um curso de extensão para atuar como Avaliador. Segue as normas técnicas da NBR onde é necessário usar de referências no documento que é um laudo bem completo especificando porque se chegou naquele valor. Em ambos os casos chegarmos no mesmo valor, porém, se você precisa por exemplo levar para uma empresa como garantia para um consórcio o indicado é O Parecer Técnico de Avaliação que é mais completo.</p>
           <p></p>
           <p>Form de Contato</p>   
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/avalie.png"
            alt="Parecer Técnico de Avaliação Mercadologica Judicial"
            width="350"
            height="279"
          />
          <h3> Parecer Técnico de Avaliação Mercadologica Judicial</h3>
          <div className={styles.description}>
          <p>
          
        
          <p>Parecer Técnico de Avaliação Mercadológica Judicial. Este segue além das normas NBR que regula os padrões técnicos, segue também os padrões da justiça que é o juízo de espécie, por isso que ele é considerado um trabalho mais completo onde o nível de exigência é maior.</p>
           <p></p>
           <p>Form de Contato</p>   
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>





  
        {/* <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/"
            alt="Fios de PDO"
            width="350"
            height="279"
            left
          />
          <h3>Fios de PDO</h3>
          <div className={styles.description}>
            <p>São inseridos na derme com o intuito de estimular o colágeno.</p>
          </div>
        </div> */}

   
      </main>


     
      <Footer />
    </>
  );
}
