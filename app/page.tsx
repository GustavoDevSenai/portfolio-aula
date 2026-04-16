import Image from "next/image";
import imagem from '../public/foto.jpg'
import { projects } from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <>
    <main className="flex flex-col-reverse lg:flex-row
        items-center
        justify-between
        gap-12
        max-w-6xl
        mx-auto
        px-6
        py-20">
      <div className="space-y-6 text-center lg:text-left">
          <h3 className="text-sm uppercase tracking-[0.2em] text-lime-400 font-mono">DESENVOLVEDOR FULL STACK</h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">Gustavo Rodrigues</h1>
          <p className="text-zinc-800 text-lg leading-relaxed max-w-md text-justify">
            Construo produtos web do zero — 
            desde a API até a interface. 
            Foco em código limpo, 
            UX que faz sentido e entregas que não travam.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a href="" 
      className="
      px-6 py-3 
      bg-lime-400 
      text-black 
      font-semibold 
      rounded-lg 
      hover:bg-lime-300 
      transition">
      Falar comigo
      </a>
      <a href="" className=
      "px-6 py-3 border border-zinc-700 text-black rounded-lg hover:bg-white transition">Ver projetos
      </a>
    </div>
      </div>
      <div>
        <Image
        className="rounded-full
        w-40 h-40
        md:w-56 md:h-56
        lg:w-72 lg:h-72
        object-cover"
        src={imagem}
        alt="foto perfil"
        width={250}
        height={250}
        />
      </div>

    </main>

    <section className="max-w-6xl mx-auto px-6 py-16">
      
      <h2 className="text-3xl font-bold mb-10" id="projetos">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index)=>(
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techs={project.techs}
              github={project.github}
            />
          ))}
      </div>

    </section>



    <section className="max-w-5x1 ml-25 mx-auto px-6" id="skills">
          <Skills />
    </section>

    <section className="max-w-5x1 ml-25 mx-auto px-6" id="experience">
          <Experience />
    </section>

    <section id="contact">
          <Contact />
    </section>

     <section id="footer">
          <Footer />
    </section>
  
    </>
    
  );
}
