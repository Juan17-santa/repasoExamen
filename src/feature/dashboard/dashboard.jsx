import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div className="flex min-h-screen">
                <div className="w-1/5 bg-gray-500 p-3">
                    <ul className="flex flex-col">
                        <li><Link to="/dashboard/" className="hover:bg-gray-600 p-2 rounded block font-semibold">Inicio</Link></li>
                        <li><Link to="/dashboard/empresas" className="hover:bg-gray-600 p-2 rounded block font-semibold">Empresas</Link></li>
                        <li><Link to="/dashboard/empleados" className="hover:bg-gray-600 p-2 rounded block font-semibold">Empleados</Link></li>
                    </ul>
                </div>
                <div className="w-4/5 bg-gray-200">
                    <Outlet />
                </div>
            </div>
        </>
    )
}