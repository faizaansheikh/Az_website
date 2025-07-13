// pages/index.tsx ya app/page.tsx
import Image from 'next/image'
// import bgImage from '../public/bg.jpg' // apni image ka path
import bgImage from '../../images/home2.jpg'
import Navbar from '../../components/Navbar'
export default function Home() {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background image (no crop, full show) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={bgImage}
          alt="Background"
          // width={'full'}
          // height={1080}
          // style={{backgroundSize:'contain'}}
          className=" w-full h-full"
          // priority
        />
      </div>

      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute inset-0 bg-black/60 z-5" />

      {/* Navbar */}
      <Navbar/>

      {/* Left Content */}
      <div className="absolute top-0 left-0 h-full w-full z-20 flex items-center justify-start px-10">
        <div className="text-white max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Site</h2>
          <p className="mb-6 text-lg md:text-xl">
            Experience the best with a fully visible background image and clean layout.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition">
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}
