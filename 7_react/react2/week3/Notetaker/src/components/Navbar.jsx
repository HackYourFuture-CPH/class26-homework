import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div className="flex justify-between gap-10 items-center bg-[#fbbd04b0] py-4 px-3 text-white">
            <Link to="/">
            <h4 className="font-mono font-bold text-3xl">
                <i className="fa fa-sticky-note"></i> Notes
                <i className="fa fa-shirt"></i>
            </h4>
            </Link>
        </div>
    )
}
