import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    
    return (
        <>
            <Routes>

                {/* METEMOS LAS ETIQUETAS DE PUBLIOCROUTE PARA PROTEGER LAS RUTAS
                Y QUE NO PUEDAS VOLVER A LA PAGINA DE LOGIN CUANDO HAYAS INICIADO SESION*/}
                <Route path="login" element={
                    <PublicRoute>
                        {/* aqui dentro podemos meter todas las rutas que queremos que sean publicas */}
                        <LoginPage />
                    </PublicRoute>
                } />

                {/* METEMOS LAS ETIQUETAS DE PRIVATEROUTE PARA PROTEGER LAS RUTAS 
                Y QUE NO PUEDAS IR A LA RUTA DE '/*' QUE SON TODAS LAS RUTAS QUE
                QUERAMOS METER EN EL ROUER HIJO SI NO HAS INICIADO SESION*/}
                <Route path="/*" element={
                    <PrivateRoute>
                        {/* aqui podemos meter todas las rutas que queramos que sean privadas */}
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}
