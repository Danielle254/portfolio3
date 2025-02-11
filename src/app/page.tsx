import About from './About'
import Projects from './Projects'

export default function Home() {
  return (
    <div className="h-full overflow-y-scroll text-center text-gray-50">
      <About />
      <Projects />
    </div>
  );
}
