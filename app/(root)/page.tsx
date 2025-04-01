import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomePage from "./home/HomePage";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 font-sans py-8">
        <NavBar />
      </div>
      <HomePage />
      <Footer />
    </>
  );
}
