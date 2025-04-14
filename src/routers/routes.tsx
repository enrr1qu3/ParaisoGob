import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Inicio from "../pages/Inicio/Inicio";
import { ErrorPage } from "../pages/Error/ErrorPage";
import LayoutTransparencia from "../layoutTransparencia/LayoutTransparencia";
import { TransparenciaInicio } from "../pages/Transparencia/TransparenciaInicio";
import { TransparenciaArchivos } from "../pages/Transparencia/TransparenciaArchivos";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: "noticias",
                element: <>Noticia</>
            },

        ]
    },
    {
        path: "/transparencia",
        element: <LayoutTransparencia />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element:  <TransparenciaInicio />
            },
            {
                path: "/transparencia/inicio",
                element: <TransparenciaInicio />
            },
            {
                path: "/transparencia/archivos-publicados",
                element: <TransparenciaArchivos />
            },

        ]
    },

]);