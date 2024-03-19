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
                    
          <p> <strong>A Opinião Profissional de Valor </strong>A Opinião Profissional de Valor é indicada para as pessoas que estão fazendo negócios entre particulares e querem saber quanto vale o imóvel oferecido. É uma opinião de valor, por exemplo, você está comprando de um amigo e não tem noção se o valor oferecido está adequado, e deseja saber se não está te passando um valor acima de mercado. Serve para qualquer transação particular sem valor judicial. </p>
           <p></p>
           <p></p>   
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
           
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/avalie2.png"
            alt="Parecer Técnico de Avaliação Mercadológica"
            width="350"
            height="279"
          />
          <h3>Parecer Técnico de Avaliação Mercadológica </h3>
          <div className={styles.description}>
          <p>
           
        
          <p>Parecer Técnico de Avaliação Mercadológica, ou simplesmente sua sigla PTAM, é um documento emitido por um profissional com formação na área, seja ele Engenheiro, Arquiteto ou Corretor de Imóveis com Certificação e Formação em Avaliação Imobiliária, título obtido através de um curso de extensão para atuar como Avaliador, obedecendo as normas técnicas da NBR pertinentes, que disciplinam entre outros passos a qualidade e tratamento matemático das referências utilizadas no documento, trata-se de um parecer  bem completo especificando como se chegou naquele valor de avaliação.
Geralmente é indicado para negócios entre empresas e particulares e empresas com outras empresas, ou ainda entre pessoas físicas que necessitem de um melhor assessoramento nos valores, podendo em alguns casos ser aceito para fundamentar valor de garantia para um consórcio ou outras operações de créditos em que o banco não possua cadastro próprio de avaliadores.
</p>
           <p></p>
           <p></p>   
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
          
        
          <p>Parecer Técnico de Avaliação Mercadológica Judicial. Bem semelhante ao PTAM COMERCIAL descrito acima, segue todo o rito de qualidade do mesmo em relação a padrão, qualidade de amostras referenciais, conforme normas NBR que regula os padrões técnicos, porém é feito também com o intuito de possuir linguagem jurídica para que sirva de referência em processos judiciais seja pela parte autora, demandada ou para assessora o trabalho do magistrado.
É também utilizado para contestar um laudo já emitido por outro profissional em um processo judicial, desde que o perito entenda que haja fundamento para tal contestação.
</p>
           <p></p>
           <p></p>   
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
