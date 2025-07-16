// pages/index.tsx ya app/page.tsx
import Image from 'next/image'
// import bgImage from '../public/bg.jpg' // apni image ka path
import bgImage from '../../images/home2.jpg'
import Navbar from '../../components/Navbar'
import MyButton from '../../components/MyButton'
import About from '../about/page'
export default function Home() {
  return (
    <>
      <div className="relative w-full h-[80vh] md:h-[90vh] ">
        {/* Background Image */}
        <img
          src="https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner3.jpg"
          alt="Banner"
          className="absolute top-0 left-0 bottom-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 bg-opacity-60"></div>

        <Navbar />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start md:items-center justify-center text-white h-full px-4 " >
          <h2 className="text-2xl md:text-6xl font-bold mb-4 text-nowrap">
            We provide Scientific Solutions
          </h2>
          <p className="mb-6 text-md md:text-lg md:text-xl max-w-2xl ">
            We provide reliable scientific solutions across various industries
          </p>
          <a href="#about">
            <MyButton title="Explore More" />
          </a>
        </div>
      </div>






    </>
  )
}

// https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner.jpg|https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner2.jpg|https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner3.jpg
