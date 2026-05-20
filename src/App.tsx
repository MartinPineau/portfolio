import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import imageTopRight from "./assets/ImageTopRight.png";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg-light)]">
      <img
        src={imageTopRight}
        alt=""
        className="absolute top-0 right-0 w-[55%] max-w-[600px] h-auto pointer-events-none select-none -z-10"
      />
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
