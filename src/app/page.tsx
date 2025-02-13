import About from './About'
import Projects from './Projects'

export default function Home() {
  return (
    <div className="md:h-full md:overflow-y-scroll text-center text-light-purple">
      <About />
      <Projects />
    </div>
  );
}
