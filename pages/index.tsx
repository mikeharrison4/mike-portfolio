import React from 'react';
import HeaderHero from '../components/header-hero/HeaderHero';
import Navigation from '../components/navigation/Navigation';
import Container from '../components/shared/container/Container';

export default function Home() {
  return (
    <Container bgColor="bg-darkslate-grey">

      <Navigation />

      <HeaderHero />

    </Container>
  );
}
