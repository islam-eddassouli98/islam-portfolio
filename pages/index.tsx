import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { PageInfo,Technology,Project,Experience,Social} from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Technology[];
  projects: Project[];
  socials: Social[];

}

const Home = ({pageInfo,experiences,skills,projects,socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Islam Portfolio</title>
      </Head>

      <Header socials={socials}/>

      {/* HERO */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className='snap-center'>
        <Experiences experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-center'>
        <Projects projects={projects} />
      </section>

      <section id="contactme" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG2gVVNRCSnig/profile-displayphoto-shrink_200_200/0/1586106336750?e=2147483647&v=beta&t=rzpEaooUYkx_-0RI1R3LjYIrd5J9PuWAN1rPHk13Bfg" alt="" />
        </div> 
     </footer>
      </Link>


    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences : Experience[] = await fetchExperiences();
  const skills : Technology[] = await fetchSkills();
  const projects : Project[] = await fetchProjects();
  const socials : Social[] = await fetchSocials();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate:10,
  }
  
}