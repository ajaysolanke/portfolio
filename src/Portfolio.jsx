import About from "./components/About";
import Demos from "./components/Demos";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Portfolio() {
  return (
    <>
    <br/>
      <br/>
      <Header className=""/>
      <br/>
      <br/>
      <About />
      <br/>
      <br/>
      <Experience /><br/>
      <br/>
      <Projects />
      <br />
      <Demos />
      </>
   )
}