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
      
        <title>Viva Imóveis Avalie | Avaliação de Imóveis - Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade</title>
        <meta
          name="description"
          content="Viva Imóveis Avalie | Avaliação de Imóveis Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade"
        />
        <meta
          name="keywords"
          content="ADS Auto| Anuncie seu Veículo"
        />
        <meta name="author" content=" Viva Imóveis Avalie | Avaliação de Imóveis Goiânia,Goianira,Senador Canedo,parecida de Goiania,Trindade " />
      </Head>

      <div>
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
          <p> - Ano 2010</p>

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


          <h3>Parati Completa</h3>
         <strong><font face="Arial" color="blue" > <i>Valor a Vista R$ 26000 </i></font></strong> 
          <div className={styles.description}>
          <p>   </p>       
            <p>
          <p> 2009 </p>

          <p>Parati Completa</p> 

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
          <p>   </p>       
            <p>
          <p> 2001 </p>

          <p>Picape Corsa 2001</p> 

          <p>  </p>
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
            src="/images/peugeot1.png"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Peugeot 206 Completo</h3>
          <font face="Arial" color="blue" >  <i>R$ 17000</i></font>
          <div className={styles.description}>
          <p>  Ótimo estado. Carro novo pra rodar  </p>       
            <p>
          <p> 4 Pneus Novos </p>



          <p>Peugeot 206 Completo</p> 

          <p>  </p>
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
            src="/images/kadet1.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />


          <h3> Kadet 1994 Kadet Alcool Original </h3>
          <font face="Arial" color="blue" >  <i>R$ 14000 </i></font>
          <div className={styles.description}>
          <p>   </p>       
            <p>
          <p> 1994 Alcool Original </p>

          <p>Kadet 2004 Alcool Original </p> 

          <p> Vidro Elétrico </p>
           <p> Motor Novo </p>
           <p></p>  
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>
                
            </p>
           
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
          <p>   </p>       
            <p>
          <p> 2001 </p>

          <p>Picape Corsa 2001</p> 

          <p>  </p>
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
          <p>   </p>       
            <p>
          <p> 2001 </p>

          <p>Picape Corsa 2001</p> 

          <p>  </p>
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
          <p>   </p>       
            <p>
          <p> 2001 </p>

          <p>Picape Corsa 2001</p> 

          <p>  </p>
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
          <p>   </p>       
            <p>
          <p> 2001 </p>

          <p>Picape Corsa 2001</p> 

          <p>  </p>
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
