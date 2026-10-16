import Image from "next/image";
import Link from "next/link";
import Hero from './components/home/hero';
import Navbar from "./components/navbar";
import About from  "./components/about/about";
import Services from  "./components/service/services";
import Project from  "./components/project/project";
import Testimonial from  "./components/testimonial/testimonial";
import Article from  "./components/article/article";
import Faq from  "./components/faq/faq";
import Footer from  "./components/footer/footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Testimonial/>
      <Article/>
      <Faq/>
      <Footer/>
    </div>
  );
}
