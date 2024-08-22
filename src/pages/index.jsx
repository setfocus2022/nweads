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
      <script async src="//static.zotabox.com/2/1/210f7c2014d328d90905c8712607b3b3/widgets.js"></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16510775654"></script>

      


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

      <div>
        <HeaderPage subtitle="Avaliação de Imóveis"    />
       
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
      {/*   <video width="320" height="240" poster="/images/avalie24.png" controls preload="none">
      <source src="/images/OPV.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>   */} 

    <MyImage
            src="/images/week4.jpeg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />

          <h3> Palio Adventure Locker </h3>
         <font face="Arial" color="blue" > <i>Valor à Vista R$ 35990</i> </font>
   
          <div className={styles.description}>
           
          <p>   </p>       
            <p>
          <p> - Ano 2003 </p>

          <p> Modelo Adventure Locker</p> 

          <p> Completa </p>
           <p> </p>
           <p></p>  
      
         

           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>

                   
            </p>
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//556293068692?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>    
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
        <video width="320" height="240" poster="/images/avalie25.png" controls preload="none">
      <source src="/images/PTAM.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
          <h3>Parecer Técnico de Avaliação Mercadológica </h3>
         <strong><font face="Arial" color="blue" > <i>Este serviço é ideal quando você precisa oferecer um imóvel como garantia para empresas, pessoas físicas e até algumas instituições financeiras, como consórcios ou operações de crédito.</i></font></strong> 
          <div className={styles.description}>
            <p>   </p>
          <p>
        
        
          <p>Nosso Parecer Técnico de Avaliação Mercadológica é indicado para uma variedade de situações, especialmente para negócios entre empresas e particulares, empresas com outras empresas ou até mesmo entre pessoas físicas que precisam de um assessoramento mais completo nos valores. Este serviço é ideal quando você precisa oferecer um imóvel como garantia para empresas, pessoas físicas ou instituições financeiras, como consórcios ou operações de crédito.<p></p>

<p>Com nosso parecer técnico, você terá uma avaliação mercadológica detalhada e fundamentada, proporcionando segurança e confiança em suas transações. Este documento é aceito por diversas instituições e pode ser utilizado para respaldar valores em uma variedade de operações comerciais.</p>

Se você precisa de um Parecer Técnico de Avaliação Mercadológica para garantir o sucesso de suas transações comerciais, clique no botão abaixo e entre em contato conosco. Estamos prontos para oferecer o suporte necessário para suas necessidades empresariais.
</p>
           <p></p>
           <p></p>   
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
              
            </p>
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//556293068692?text=Olá, eu vim da sua página de avaliação de imóveis e me interessei por PARECER TÉCNICO DE AVALIAÇÃO JUDICIAL como funciona a contratação da avaliação? "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Clique aqui
              </Button>  
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
        <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
          <h3> Parecer Técnico de Avaliação Mercadológica Judicial</h3>
          <font face="Arial" color="blue" >  <i>Indicado para todos tipos de processos judiciais, como separações, partilhas de herança, avaliação patrimonial e qualquer outro processo que envolva o poder judicial </i></font>
          <div className={styles.description}>
          <p>   </p>
          <p>

        
        
          <p>Nosso Parecer Técnico de Avaliação Mercadológica Judicial segue os mais rigorosos padrões de qualidade, semelhante ao PTAM Comercial, conforme normas NBR que regem os padrões técnicos. No entanto, este serviço é especialmente elaborado com linguagem jurídica, tornando-o ideal para processos judiciais.</p>

<p>Com nosso parecer técnico judicial, você terá uma avaliação robusta e fundamentada, aceita em todos os tipos de processos judiciais. Este serviço é essencial para casos comuns, como separações, partilhas de herança, avaliação patrimonial e qualquer outro processo que envolva o poder judicial. 
  Seja para contestar laudos emitidos por outros profissionais, seja para servir como referência para partes envolvidas, demandadas, ou mesmo para auxiliar o trabalho do magistrado, nosso serviço oferece a segurança e confiabilidade necessárias em qualquer contexto jurídico.</p>

<p>Se você precisa de um Parecer Técnico de Avaliação Mercadológica Judicial para fortalecer sua posição em um processo judicial, clique no botão abaixo e entre em contato conosco. Estamos prontos para oferecer o suporte técnico e jurídico necessário para o sucesso de sua causa.
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
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//556293068692?text=Olá, eu vim da sua página de avaliação de imóveis e me interessei por PARECER TÉCNICO DE AVALIAÇÃO JUDICIAL como funciona a contratação da avaliação? "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Clique aqui
              </Button>  
        </div>


      <div className={styles.schedule}>
        <p>
          Aberto: Seg - Sex: 08:00 - 18:00 | Av. Principal, 999 - Lençóis
          Paulista -SP
        </p>
      </div> 

      <main className={styles.hero}>
        <div className={`mainContainer ${styles.heroWrap}`}>
          <section className={styles.centerContent}>
            <h1 className="title" data-aos="fade-up">
            <center> Hora de Vender? <strong>Te damos uma força! </strong> </center>
            </h1>

          
            <p data-aos="fade-up" data-aos-delay="200">
            <center>  Anuncie aqui seu veículo  </center>
             </p>
           
  


            
          </section>

         
        </div>
      </main>


 

     <section className={`${styles.about} mainContainer`}>
    
          <div data-aos="fade-down">
       <Title color="blue" title="junior" subtitle="Conheça nossas Lojas" />
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
              <strong2> Propaganda é a arma do Negócio  </strong2> <strong>do Negócio</strong>
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
