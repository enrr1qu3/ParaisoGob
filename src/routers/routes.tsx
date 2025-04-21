import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Inicio from "../pages/Inicio/Inicio";
import { ErrorPage } from "../pages/Error/ErrorPage";
import LayoutTransparencia from "../layoutTransparencia/LayoutTransparencia";
import { TransparenciaInicio } from "../pages/Transparencia/TransparenciaInicio";
import { TransparenciaArchivos } from "../pages/Transparencia/TransparenciaArchivos";
import Noticias from "../pages/Noticias/Noticias";
import Noticia from '../pages/Noticias/Noticia';
import Historia from "../pages/Historia/Historia";
import Geografia from "../pages/Geografia/Geografia";
import GobiernoPage from "../pages/Gobierno/GobiernoPage";


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
                children: [
                    {
                        index: true,
                        element: <Noticias />
                    },
                    {
                        path: ":noticiaId",
                        element: <Noticia />
                    },

                ]
            },
            {
                path: "/historia",
                element: <Historia />
            },
            {
                path: "/geografia",
                element: <Geografia />
            },
            {
                path: "/gobierno",
                element: <GobiernoPage />
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
                element: <TransparenciaInicio />
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