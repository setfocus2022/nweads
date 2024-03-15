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
            src="/images/pizzaria.jpg"
            alt="Opinião Profissional de Valor"
            width="350"
            height="279"
            left
          />
          <h3> Opinião Profissional de Valor </h3>
          <div className={styles.description}>
            <p>
            Site disk entrega para Pizzaria com botão que chama o Whatsapp direto para o pedido.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://lacasapizzabar.vercel.app/">
                  <a target="_blank">
                  Site La Casa Pizza Bar
                  </a>
                </Link>
           
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Parecer Técnico de Avaliação Mercadológica"
            width="350"
            height="279"
          />
          <h3>Parecer Técnico de Avaliação Mercadológica </h3>
          <div className={styles.description}>
          <p>
            Site para Loja de Material Elétrico com foco no fortalecmento da marca e aumento da area de atuação de vendas.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://www.eletrosantaclara.com.br">
                  <a target="_blank">
                  Eletro Santa Clara
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_3.png"
            alt="Parecer Técnico de Avaliação Mercadologica Judicial"
            width="350"
            height="279"
          />
          <h3> Parecer Técnico de Avaliação Mercadologica Judicial</h3>
          <div className={styles.description}>
          <p>
          Site institucional para Clínica Odontológica com botão que chama o Whatsapp direto para a atendente.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia á com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://www.dralaisconeglian.com.br">
                  <a target="_blank">
                  Clinica Dra Laís Coneglian
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
