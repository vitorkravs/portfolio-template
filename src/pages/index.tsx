import { HomeContainer } from "../styles/HomeStyles";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { Projetos } from "../components/Projetos";
import { Conhecimentos } from "../components/Conhecimentos";
import { FormContato } from "../components/FormContato";
import { Footer } from "../components/Footer";
import {Fade} from "" 
import  Head  from "next/head";

export default function Home() {


  return (
    <HomeContainer>

        <Head>
            <title>Home | Meu portfólio</title>
            <meta
              name="description"
              content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
            <meta
              property="og:description"
              content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
            />
          </Head>
      

      <Header/>
      <main className="container">
        <HomeHero/>
        <Projetos/>
        <Conhecimentos/>
        <FormContato/>
      </main>
      <Footer/>
    </HomeContainer>
  );
}