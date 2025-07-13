import { title } from "process"
import react from "react"
const GlassEffect = ({children}) => {

    return (
        <>
            <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
                <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-4 text-white max-w-md flex">
                    {/* <h2 className="text-3xl font-bold mb-4">Glass Effect</h2> */}
                    {children}
                </div>
            </div>
        </>
    )
}
export default GlassEffect