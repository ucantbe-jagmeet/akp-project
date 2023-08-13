import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Advertise from "./pages/Advertise";
import Featuring from "./pages/Featuring";
import Hero from "./pages/Hero";
import Hero2 from "./pages/Hero2";
import Hero3 from "./pages/Hero3";

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
        <Hero3 />
        <Footer />
      </main>
    </>
  );
}

export default App;
