import Image from "next/image";
import Home from "./home/page";
import Navbar from "../components/Navbar";
import About from "./about/page";
import Partners from "./partners/page";
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
      <div className="mt-[70px] md:mt-[30px]">

        <Partners />
      </div>

      {/* <Navbar/> */}

    </div>
  );
}
