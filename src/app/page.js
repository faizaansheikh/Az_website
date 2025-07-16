import Image from "next/image";
import Home from "./home/page";
import Navbar from "../components/Navbar";
import About from "./about/page";
import Partners from "./partners/Products";
import Products from "./products/Products";
import Footer from "./footer/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Page() {
  return (
    <div className="">
      <div className="mb-4" id="home">
        <Home />
      </div>

      <div className="mt-[70px] md:mt-0" id="about">
        <About />
      </div>
      <div className="mt-[70px] mb-[40px] md:mt-[60px]" id="partner">

        <Partners />
      </div>

      <div className="mt-[70px] mb-[40px] md:mt-[100px]" id="products">

        <Products />
      </div>



      <div className="mt-[70px] md:mt-[100px]">

        <Footer />
      </div>

      
      {/* <Navbar/> */}

    </div>
  );
}