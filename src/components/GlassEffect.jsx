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

            {/* http://127.0.0.1:62679/?code=f468af7ff9390219c943&state=deb397def5374b0fb794b0c24f41b2d3 */}
        </>
    )
}
export default GlassEffect