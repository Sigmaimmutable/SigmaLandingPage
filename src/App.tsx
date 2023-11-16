import Lenis from "@studio-freight/lenis";
import Clients from "./sections/clients";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Showcase from "./sections/showcase";
import Tractions from "./sections/tractions";
import UseCases from "./sections/usecases";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <UseCases />
      <Tractions />
      <Clients />
      <Footer />
    </>
  );
}
