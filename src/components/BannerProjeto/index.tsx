import { ReactNode } from 'react';

import { Container } from './styles';

interface BannerProjetoProps {
  title: string;
  description: string;
  imgUrl: string;
}

export function BannerProjeto({ title, description, imgUrl }: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className='overlay'/>
      <section>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </section>
    </Container>
  );
}