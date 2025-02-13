import About from './About'
import Projects from './Projects'

export default function Home() {
  return (
    <div className="h-full overflow-y-scroll text-center text-light-purple">
      <About />
      <Projects />
    </div>
  );
}
