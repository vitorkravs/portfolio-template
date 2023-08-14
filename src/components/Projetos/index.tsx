import React, { useEffect } from 'react';
import fetchDataFromApi from '../../api/datoCMS';
import { Container } from './styles';
import {useState} from 'react';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import Link from 'next/dist/client/link';

export function Projetos() {
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
    <Container>
      <SectionTitle title="#Últimos Projetos"/>
      <section>
        {projetos.slice(-3).map(projeto => (
          <ProjetoItem 
            key={projeto.slug}
            title={projeto.title}
            description={projeto.description}
            img={projeto.imgurl}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type='button'>
        <Link href={'/projetos'}>
          <a>Veja todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}