import React from 'react';

import Container from '../components/shared/Container';
import Navigation from '../components/navigation/Navigation';
import { HeaderHero, About, MyWork } from '../components/homepage';
import MyCareer from "../components/homepage/my-career";

export default function Home() {
  return (
    <>

      <section id="home" className="bg-darkslate-grey">
        <Container>

          <Navigation />

          <HeaderHero />

        </Container>
      </section>

      <section id="about" className="py-16 px-6 sm:px-4">
        <Container>
          <About />
        </Container>
      </section>

      <section id="my-work" className="py-16 px-6 sm:px-4 bg-gray-100">
        <Container>
          <MyWork />
        </Container>
      </section>

      <section id="my-career" className="py-16 px-6 sm:px-4">
        <Container>
          <MyCareer />
        </Container>
      </section>

    </>
  );
}
