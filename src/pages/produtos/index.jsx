import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/Button";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import React from 'react';


export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta",
      category: "marcar_consulta_whatsapp",
      label: "Novo Contato",
      value: "Orçamento",
    });
  }

  return (

    

    
    <>
      <Head>

       {/*  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16510775654"></script>  */} 
      
        <title>ADS Auto  | Venda de Carros Online  - Lençóis Paulista - Bauru - Marília</title>
        <meta
          name="description"
          content="ADS Auto | Publicidade para Venda Carros"
        />
        <meta
          name="keywords"
          content="ADS Auto| Anuncie seu Veículo"
        />
        <meta name="author" content=" ADS Auto | Publicidade para Venda Carros" />
      </Head>

      <div>

        <p>Hinode u</p>
        <HeaderPage subtitle="Venda de Veículos"    />
       
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
            alt="ADS Auto | Publicidade para Venda Carros"
            width="350"
            height="279"
            left
          />

          <h3> Palio Adventure Locker 2010 </h3>
         <h2><font face="Arial" color="red" > R$ 38000 </font></h2>
   
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : Entrada + Promissória </p> 
           <Link href="https://www.adsauto.com.br/weekend">
                  <a target="_blank">
                  <h2>Ver Mais Fotos</h2>
                  </a>
                </Link>
                <p> - </p>
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
         </Button>    
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
    {/*      <video width="320" height="240" poster="/images/avalie25.png" controls preload="none">
      <source src="/images/PTAM.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>  */} 

<MyImage
            src="/images/wolks1.jpeg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3>Parati Completa 2009 </h3>
         <h2><strong><font face="Arial" color="blue" > R$ 26000 </font></strong> </h2>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>    </p> 
           <Link href="www.google.com">
                  <a target="_blank">
                  <h2>Ver Mais Fotos</h2>
                  </a>
                </Link>
                <p> - </p>    
           
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*    <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. 


    </video> */} 

<MyImage
            src="/images/corsa1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Picape Corsa Basica 2001</h3>
          <h2><font face="Arial" color="red" > R$ 22000 </font></h2>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>   </p>
           <Link href="wwww.google.com">
                  <a target="_blank">
                  <h2>Ver Mais Fotos</h2>
                  </a>
                </Link>
                <p> - </p> 
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>

       {/*  <div className={styles.treatmentsItem} data-aos="fade-up">


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

<MyImage
            src="/images/peugeot1.png"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Peugeot 206 Completo </h3>
          <h2><font face="Arial" color="red" >  R$ 17.000,00 </font> </h2>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 

          <p>  </p> 
           <Link href="">
                  <a target="_blank">
                  <h2>Ver Mais Fotos</h2>
                  </a>
                </Link>
                
           
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>  */} 

        <div className={styles.treatmentsItem} data-aos="fade-up">

          
        {/*    <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. 


    </video> */} 

<MyImage
            src="/images/kadet1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Kadet 1994 Alcool Original </h3>
          <h2><font face="Arial" color="red" >  R$ 14.000,00 </font> </h2>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>  </p> 
           <Link href="https://www.adsauto.com.br/kadet">
                  <a target="_blank">
                  <h2>Ver Mais Fotos</h2>
                  </a>
                </Link>
         
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*    <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. 


    </video> */} 

<MyImage
            src="/images/corsa1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Picape Corsa 2001</h3>
          <font face="Arial" color="blue" >  <i>R$ 22000 </i></font>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>  </p> 
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
                
           
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*    <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. 


    </video> */} 

<MyImage
            src="/images/corsa1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Picape Corsa 2001</h3>
          <font face="Arial" color="blue" >  <i>R$ 22000 </i></font>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>  </p> 
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
                
            
           
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*    <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. 


    </video> */} 

<MyImage
            src="/images/corsa1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Picape Corsa 2001</h3>
          <font face="Arial" color="blue" >  <i>R$ 22000 </i></font>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>  </p> 
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
                          
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
        {/*    <video width="320" height="240"  poster="/images/avalie26.png" controls preload="none">
      <source src="/images/PTAMJ.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. 


    </video> */} 

<MyImage
            src="/images/corsa1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Picape Corsa 2001</h3>
          <font face="Arial" color="blue" >  <i>R$ 22000 </i></font>
          <div className={styles.description}>
          <p> Ano : </p>  
          <p> Local :  </p>       
          <p> Fabricante : </p>
          <p> Modelo : </p>
          <p> Descrição : </p> 
          <p> Parcelamento : </p> 
          <p>  </p>  
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
                
                       
          </div>
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
              </Button>  
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
