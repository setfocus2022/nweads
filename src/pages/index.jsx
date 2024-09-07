/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Button } from "../components/Button";
import { MyImage } from "../components/MyImage";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { depositions } from "../data/depositions.js";
import * as gtag from "../lib/gtag";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [currentDepositions, setCurrentDepositions] = useState(depositions[0]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta",
      category: "marcar_consulta_whatsapp",
      label: "Impulsione seus negócios",
      value: "Orçamento",
    });
  }

  return (
    <>
      <Head>
      <script async src="//static.zotabox.com/9/1/91aee11a6170922cbfb29e7b88750e18/widgets.js"></script>

   

      
      
<script async src="https://www.googletagmanager.com/gtag/js?id=G-61KK36TT9J"></script>


       <title>Home | Ads Auto - Marketing para Venda de Carros </title> 
       <p>2024 Copyright - All Rights Reserved </p>
        <meta align="center"
          name="keywords"
          content="Ads Auto - Marketing para Venda de Carros "
        />
        <meta align="center"
          name="keywords"
          content=" Quer Vender seu Veiculo? Somos Especialistas em Ads para Autos "
      
        />
        <meta name="author" content="Ads Auto" />
     
               
      </Head>


    
     

 

     <section className={`${styles.about} mainContainer`}>
    
          <div data-aos="fade-down">
       {/* <Title color="blue" title="junior" subtitle="Conheça nossas Lojas" /> */}
         <p><strong>Conheça nossas Lojas</strong></p>   
        </div> 
           <div className={styles.aboutContent}>
              Tevez
           
            ;  

           <div className={styles.imgAbout} data-aos="fade-up">


    
           <MyImage
              src="/images/fachada.jpg"
              alt="Fachada"
              width="540"
              height="500"
              left
            /> 
          </div>    



          <div className={styles.aboutRightContent} data-aos="fade-up">
              <h3>
              <strong2> Precisa Vender? </strong2> <strong>A Gente te Ajuda</strong>
          </h3> 
            <p>

           Propaganda é a arma do Negócio

            </p>
            <Button link="/produtos" >
            Anuncie aqui seu veículo. 
            </Button>
          </div>

        </div>

       
      </section>

      
      
 
{/*
      <section className={`${styles.doctor} mainContainer`}>
        <div className={styles.doctorContent} data-aos="fade-up">
          <Title
            title="Laís Coneglian Dutra"
            subtitle="Conheça nossa doutora"
          />
          <p className={styles.doctorText}>
            Laís é formada na Faculdade de Odontologia de Bauru - USP (2019) que
            é considerada a melhor faculdade de odontologia do mundo pelo
            ranking CWUR, além de outros rankings. É também especialista em
            Harmonização Facial pelo IEO Bauru. Está sempre se atualizando e
            aperfeiçoando suas técnicas para oferecer os melhores produtos e
            serviços para seus pacientes. É atenciosa e preparada para atender a
            todos, desde crianças até idosos.
          </p>
          <Link href="/doutora">
            <a>Ler mais</a>
          </Link>
        </div>

        <Image
          src="/images/sobreDoutora.png"
          alt="Dra Laís C. Dutra"
          width="527"
          height="539"
          objectFit="contain"
          data-aos="fade-down"
        />
      </section>  
   
         <section className={styles.patients}>
        <Title
          title=" Depoimentos "
          subtitle=" Alguns pensamentos de nossos Clientes "
        />

        <ul className={`${styles.patientsList} mainContainer`}>
          {depositions.map((item) => (
            <li
              key={item.id}
              className={
                currentDepositions === item
                  ? `${styles.active} animeOpacity`
                  : ""
              }
            >
              <p>&ldquo;{item.description}&rdquo;</p>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className={styles.slideBtn}>
          {depositions.map((item, idx) => (
            <button
              key={item.id}
              className={currentDepositions === item ? styles.active : ""}
              onClick={() => setCurrentDepositions(item)}
              aria-label="mudar depoimento"
            ></button>
          ))}
        </div>
      </section>
*/}
      <Footer />
    </>
  );
  <script async src="//static.zotabox.com/2/1/210f7c2014d328d90905c8712607b3b3/widgets.js"></script>
}
