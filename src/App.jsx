import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PersonalProjects from "./components/PersonalProjects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import {
  aboutCardList,
  skillsImageList,
  projectsList,
  PersonalProjectsList,
} from "./components/Content/content";
import DisplayImage from "./assets/images/Profile_P1.png";

export default function App() {
  return (
    <>
      <Header />
      <Intro img={DisplayImage} />
      <About list={aboutCardList} />
      <Skills img={skillsImageList} />
      <Projects list={projectsList} />
      <PersonalProjects list={PersonalProjectsList} />
      <ContactForm />
      <Footer />
    </>
  );
}
