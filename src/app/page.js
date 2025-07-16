import Image from "next/image";
import Home from "./home/page";
import Navbar from "../components/Navbar";
import About from "./about/page";
<<<<<<< HEAD
import Partners from "./partners/Products";
import Products from "./products/Products";
import Footer from "./footer/Footer";
=======
import Partners from "./partners/page";
>>>>>>> fbaff59c6079472da53c28afefac3cea738a036a
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Page() {
  return (
    <div className="">
      <div className="mb-4">
        <Home />
      </div>

      <div className="mt-[70px] md:mt-0">
        <About />
      </div>
<<<<<<< HEAD
      <div className="mt-[70px] mb-[40px] md:mt-[60px]">
=======
      <div className="mt-[70px] md:mt-[30px]">

        <Partners />
      </div>
>>>>>>> fbaff59c6079472da53c28afefac3cea738a036a

        <Partners />
      </div>

      <div className="mt-[70px] mb-[40px] md:mt-[100px]">

        <Products />
      </div>



      <div className="mt-[70px] md:mt-[100px]">

        <Footer />
      </div>

      
      {/* <Navbar/> */}

    </div>
  );
}