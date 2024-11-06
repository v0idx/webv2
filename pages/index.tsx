import Head from 'next/head';

import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {

  const executeScroll = (sectionId: string) => {
    if (typeof window) {
      var element;
      if (sectionId == "") {
        document.documentElement.scrollIntoView({behavior: 'smooth'});
        let mbtn = document.getElementById("myBtn");
        if (mbtn) {
          mbtn.style.display = "none";
        }
      } else {
        element = document.getElementById(sectionId);
      }
      
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
        let mbtn = document.getElementById("myBtn");
        if (mbtn) {
          mbtn.style.display = "flex";
        }
        
      }
    }
  }

  return (
    <>
      <Head>
        <title>v0idx</title>
        <meta name="description" content="Elle's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <button tabIndex={0} onKeyDown={() => {executeScroll("")}} onClick={() => {executeScroll("")}} id="myBtn" title="Go to top"><i className="fa fa-caret-up fa-lg"></i></button>
        <section id="home">
          <Hero />
          <Skills />
          <button tabIndex={0} onKeyDown={() => {executeScroll("projects")}} onClick={() => {executeScroll("projects")}}><i className="fa fa-caret-down fa-5x down-arrow" id="projects-button"></i></button>   
        </section>       
        <section id="projects">
          <Projects />
          <button tabIndex={0} onKeyDown={() => {executeScroll("contact")}} onClick={() => {executeScroll("contact")}}><i className="fa fa-caret-down fa-5x down-arrow" id="contact-button"></i></button>
        </section> 
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
