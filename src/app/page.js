'use client';
import Image from "next/image";
import Home from "./home/page";
import Navbar from "../components/Navbar";
import About from "./about/page";
import Partners from "./partners/Partners";
import Products from "./products/Products";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Partner from "../components/Partner";
import { bgcolor } from "@/utils";
import Product from "@/components/Product";

// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Page() {
  return (
    <div className="">
     

      <div className="mt-[70px] md:mt-0" id="about">
        <About />
      </div>
    <div className="mt-[70px] mb-[40px] pb-20 w-full h-[auto] md:mt-[60px]" style={{backgroundColor:'#e2dedeff'}} id="partner">

        <Partner />
      </div>

      <div className="mt-[70px] mb-[80px] md:mt-[100px]" id="products">

        <Product />
      </div>

      <div className="mt-[50px] md:mt-[50px]" id="contact">

        <Contact />
      </div>

     




      {/* <Navbar/> */}

    </div>
  );
}