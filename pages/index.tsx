import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const executeScroll = (sectionId: string) => {
    if (process.browser) {
      if (sectionId == "") {
        document.documentElement.scrollIntoView({behavior: 'smooth'});
        let mbtn = document.getElementById("myBtn");
        if (mbtn) {
          mbtn.style.display = "none";
        }
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
        let mbtn = document.getElementById("myBtn");
        if (mbtn) {
          mbtn.style.display = "flex";
        }
        
      }
    }
    return undefined;
  }

  // var mybtn: HTMLElement;

  // if (typeof window !== 'undefined') {
  //   let mybtn = document.getElementById("myBtn");
  //   window.onscroll = function() {scrollFunction()};
  // }

  
  

  // function scrollFunction() {
  //   if (mybtn) {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       mybtn.style.display = "flex";
  //     } else {
  //       mybtn.style.display = "none";
  //   }
  // }

// }
  

  

  const topBtn = () => {
    document.documentElement.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <Head>
        <title>v0idx</title>
        <meta name="description" content="Elle's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <button onClick={() => {executeScroll("")}} id="myBtn" title="Go to top"><i className="fa fa-caret-up fa-lg"></i></button>
        <section id="home">
          <Hero />
          <Skills />
          <button onClick={() => {executeScroll("projects")}}><i className="fa fa-caret-down fa-5x down-arrow" id="projects-button"></i></button>   
        </section>       
        <section id="projects">
          <Projects />
          <button onClick={() => {executeScroll("contact")}}><i className="fa fa-caret-down fa-5x down-arrow" id="contact-button"></i></button>
        </section> 
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
