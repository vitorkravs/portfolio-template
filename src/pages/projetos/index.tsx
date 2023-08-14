import React, { useEffect, useState } from 'react';
import fetchDataFromApi from '../../api/datoCMS';
import { Header } from "../../components/Header";
import { ProjetoList } from "../../components/ProjetoList";
import { ProjetoContainer } from "../../styles/ProjetosStyles";
import Head from 'next/head';

export default function Projetos() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetchDataFromApi()
        .then(data => {
            setProjetos(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
    }, []);

    return (
        <ProjetoContainer>
            <Head>
                <title>Projetos</title>
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
                    {projetos.map(projeto =>(
                        <ProjetoList
                        key={projeto.slug}
                        title={projeto.title}
                        description={projeto.description}
                        imgUrl={projeto.imgurl}
                        slug={projeto.slug}
                        />
                    ))}
                </main>
        </ProjetoContainer>
    )
}