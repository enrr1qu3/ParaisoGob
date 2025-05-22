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
import CabildoPage from "../pages/Cabildo/CabildoPage";
import AtencionCPage from "../pages/AtencionCiudadana/AtencionCPage";
import TransparenciaPage from "../pages/Transparencia/TransparenciaPage";
import TransparenciaLGCGPage from "../pages/Transparencia/TransparenciaLGCGPage";
import TransparenciaRendiCuentas from "../pages/Transparencia/TransparenciaRendiCuentas";
import TransparenciaLenguaCiuda from "../pages/Transparencia/TransparenciaLenguaCiuda";
import TransparenciaRescFedTrans from "../pages/Transparencia/TransparenciaRescFedTrans";
import TransparenciaUEDMPage from "../pages/Transparencia/TransparenciaUEDMPage";
import { TransparenciaNormaMuncipal } from "../pages/Transparencia/TransparenciaNormaMuncipal";
import { TransparenciaHidrocarburos } from "../pages/Transparencia/TransparenciaHidrocarburos";
import TransparenciaComite from "../pages/Transparencia/TransparenciaComite";



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
                path: "/cabildo",
                element: <CabildoPage />
            },
            {
                path: "/atencionCiudadana",
                element: <AtencionCPage />
            },
            {
                path: "/sevac",
                element: <TransparenciaPage />
            },
            {
                path: "/lgcg",
                element: <TransparenciaLGCGPage />
            },
            {
                path: "/rendicion-de-cuentas",
                element: <TransparenciaRendiCuentas />
            },
            {
                path: "/presupuesto-lenguaje-ciudadano",
                element: <TransparenciaLenguaCiuda />
            },
            {
                path: "/recursos-federales-transferidos",
                element: <TransparenciaRescFedTrans />
            },
            {
                path: "/uedm",
                element: <TransparenciaUEDMPage />
            },
            {
                path: "/normatividad-municipal",
                element: <TransparenciaNormaMuncipal />
            },
            {
                path: "/ramo-23-hidrocarburos",
                element: <TransparenciaHidrocarburos />
            },
            {
                path: "/informacion-publica",
                element: <TransparenciaComite />
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