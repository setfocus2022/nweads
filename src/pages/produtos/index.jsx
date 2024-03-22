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

export default function Tratamentos() {
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
         <font face="Arial" color="#002d4b" > Indicado para negociação entre particulares </font>
   
          <div className={styles.description}>
           
          <p>   </p>       
            <p>
          <p> Nossa Opinião Profissional de Valor é perfeita para aqueles que estão envolvidos em negociações entre particulares. Talvez você esteja considerando comprar ou vender um imóvel de um amigo ou familiar e queira garantir que está recebendo ou pagando um valor justo. É aqui que entramos em cena.</p>

<p> Com nossa avaliação profissional, você terá uma visão clara e imparcial do valor do imóvel em questão. Não se preocupe se está pagando mais do que o justo ou vendendo abaixo do preço. Nossa análise minuciosa garantirá transparência e segurança em sua transação. Além disso, entregamos o serviço conforme os órgãos regulamentadores, fornecendo um laudo técnico detalhado que explica o processo utilizado para chegar ao valor final de avaliação.</p> 

<p>É importante observar que essa Opinião de Valor não é um documento válido processos júricos como casos de partilha de bens, em divórcios,  inventários ou herança. 

Se esse é o serviço que resolve o seu problema, clique no botão e me chame no WhatsApp. Se o que você precisa ainda não é isso, temos mais duas modalidades de avaliações que estão abaixo. Assista os vídeos e entenda qual delas é a melhor para você. </p>
           <p></p>
           <p></p>   
           <Link href="">
                  <a target="_blank">
                  
                  </a>
                </Link>

                <Button
                onClick={agendarConsulta}
                link="https://wa.me//556293068692?text=Gostaria de saber mais sobre Opinião Profissional de Valor"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Saiba Mais
              </Button>       
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
          <font face="Arial" color="#002d4b" >Este serviço é ideal quando você precisa oferecer um imóvel como garantia para empresas, pessoas físicas e até algumas instituições financeiras, como consórcios ou operações de crédito.</font>
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
                <Button
                onClick={agendarConsulta}
                link="https://wa.me//556293068692?text=Gostaria de saber mais sobre Parecer Técnico de Avaliação Mercadológica "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Saiba Mais
              </Button>  
            </p>
           
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/avalie3.png"
            alt="Parecer Técnico de Avaliação Mercadologica Judicial"
            width="350"
            height="279"
          />
          <h3> Parecer Técnico de Avaliação Mercadologica Judicial</h3>
          <font face="Arial" color="#002d4b" >Indicado para todos tipos de processos judiciais, como separações, partilhas de herança, avaliação patrimonial e qualquer outro processo que envolva o poder judicial</font>
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
                <Button
                onClick={agendarConsulta}
                link="https://wa.me//556293068692?text=Gostaria de saber mais sobre Parecer Técnico de Avaliação Mercadologica Judicial"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Saiba Mais
              </Button>  
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
