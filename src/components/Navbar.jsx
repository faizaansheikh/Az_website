import { title } from "process"
import react from "react"
import GlassEffect from "./GlassEffect"
const Navbar = () => {
    const menu = [
        {
            title: 'name',
            children: [],
        },
        {
            title: 'name',
            children: [],
        },
        {
            title: 'name',
            children: [],
        },
        {
            title: 'name',
            children: [],
        },
        {
            title: 'name',
            children: [],
        },
        {
            title: 'name',
            children: [],
        }
    ]
    return (
        <>
            {/* <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 text-white"> */}
            <div className="absolute top-0 left-0 right-0  flex justify-between items-center z-20 p-4">

                <div>logo</div>
                <div className="flex ">
                    <GlassEffect>
                        {menu.map((x, i) => (

                            <li className="list-none text-white" key={i}>{x.title}</li>
                        ))}
                    </GlassEffect>
                </div>
                <div></div>
            </div>
        </>
    )
}
export default Navbar