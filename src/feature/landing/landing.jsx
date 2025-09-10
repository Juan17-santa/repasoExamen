import { Link, Outlet } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <div>
                <nav className="bg-gray-500 text-white">
                    <ul className="flex justify-center p-4 gap-4">
                        <li className="p-2 hover:bg-gray-600 rounded"><Link to="/">Login</Link></li>
                        <li className="p-2 hover:bg-gray-600 rounded"><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="min-h-screen p-4 bg-gray-400">
                <Outlet />
            </div>
        </>
    )
}