import HeroBook from "./HeroBook";
import About from "./About";
import Program from "./Program";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="text-white overflow-x-hidden">
      <HeroBook />
      <About />
      <Program />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
