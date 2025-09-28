import { Link } from "react-router-dom"
import Logo from "../assets/Logo.jpg"

function NavBar() {
    return (
        <div className="flex space-x-8 items-center pl-3 py-4 bg-gray-800 text-white">
            <Link to="/">
                <img className="w-[80px]" src={Logo} alt="Logo" />
            </Link>
            <div className="text-blue-500 font-bold text-3xl space-x-8">
                <Link to="/">Movies</Link>
                <Link to="/watchlist">Watch List</Link>
            </div>
        </div>
    )
}

export default NavBar
