import About from "./About";
import Projects from "./Projects";
import Connect from "./Connect";

export default function Home() {
  return (
    <div className="h-full md:overflow-y-scroll text-center text-light-purple scroll-smooth">
      <About />
      <Projects />
      <Connect />
    </div>
  );
}
