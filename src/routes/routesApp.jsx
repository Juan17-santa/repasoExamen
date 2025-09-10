import { Route, Routes } from "react-router-dom";
import Landing from "../feature/landing/landing";
import Login from "../feature/landing/pages/auth/login";
import Registrate from "../feature/landing/pages/auth/register";
import Dashboard from "../feature/dashboard/dashboard";
import Empresas from "../feature/dashboard/empresas/empresas";
import Empleados from "../feature/dashboard/empleados/empleados";
import Inicio from "../feature/dashboard/inicio/inicio";

export default function RoutesApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />}>
                    <Route index element={<Login />} />
                    <Route path="/register" element={<Registrate />} />
                </Route>

                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<Inicio />} />
                    <Route path="empresas" element={<Empresas />} />
                    <Route path="empleados" element={<Empleados />} />
                </Route>
            </Routes>
        </>
    )
}