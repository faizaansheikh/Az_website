import { title } from "process"
import react from "react"
const GlassEffect = ({children,className}) => {

    return (
        <>
            <div className={`${className} z-20 transform `}>
                <div className="backdrop-blur-lg bg-[black]/10 border border-grey/20 rounded-xl shadow-xl p-2 w-auto flex justify-center items-center ">
                    {/* <h2 className="text-3xl font-bold mb-4">Glass Effect</h2> */}
                    {children}
                </div>
            </div>

            {/* http://127.0.0.1:62679/?code=f468af7ff9390219c943&state=deb397def5374b0fb794b0c24f41b2d3 */}
        </>
    )
}
export default GlassEffect