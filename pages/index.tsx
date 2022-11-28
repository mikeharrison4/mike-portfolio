import React from 'react';

import Container from '../components/shared/Container';
import HeaderHero from '../components/header-hero/HeaderHero';
import Navigation from '../components/navigation/Navigation';
import About from '../components/about/About';

export default function Home() {
  return (
    <>

      <section id="home" className="bg-darkslate-grey">
        <Container>

          <Navigation />

          <HeaderHero />

        </Container>
      </section>

      <section id="about" className="py-16 mx-6 sm:mx-4">
        <Container>
          <About />
        </Container>
      </section>

    </>
  );
}
