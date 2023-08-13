import Brands from "./components/Brands";
import Navbar from "./components/Navbar";
import Advertise from "./pages/Advertise";
import Featuring from "./pages/Featuring";
import Hero from "./pages/Hero";
import Hero2 from "./pages/Hero2";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Brands />
        <Hero2 />
        <Advertise />
        <Featuring />
      </main>
    </>
  );
}

export default App;
