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
// import { TransparenciaHidrocarburos } from "../pages/Transparencia/TransparenciaHidrocarburos";
import TransparenciaComite from "../pages/Transparencia/TransparenciaComite";
import AvisoPrivacidad from "../pages/AvisoPrivacidad/AvisoPrivacidad";
import SAREPage from "../pages/SARE/SAREPage";
import { TransparenciaArchivoMunicipal } from "../pages/Transparencia/TransparenciaArchivoMunicipal";
import { NoticiaASIPONA } from "../pages/Noticias/Notas/NoticiaASIPONA";
import { NoticiaSumiElectri } from "../pages/Noticias/Notas/NoticiaSumiElectri";
import { NoticiaMedioAmbiente } from "../pages/Noticias/Notas/NoticiaMedioAmbiente";



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
                        path: "Paraiso_Recibe_con_Entusiasmo_al_Ballet_Folklórico_Usim_Yeye_de_Sonora_en_Intercambio_Cultural",
                        element: <Noticia />
                    },
                    {
                        path: "ASIPONA_y_Ayuntamiento_de_Paraiso_Refuerzan_Colaboracion_para_el_Progreso_del_municipi",
                        element: <NoticiaASIPONA />
                    },
                    {
                        path: "Alcalde_Alfonso_Baca_Sevilla_ImpulsaSoluciones_para_Mejorar_el_Suministro_Electrico_en_Paraiso",
                        element: <NoticiaSumiElectri />
                    },
                    {
                        path: "Paraiso_Celebra_el_Dia_Mundial_del_Medio_Ambiente_con_un_Firme_Compromiso_por_Mares_Libres_de_Plastico_y_un_Futuro_Sostenible",
                        element: <NoticiaMedioAmbiente />
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
                path: "/archivo-municipal",
                element: <TransparenciaArchivoMunicipal />
            },
            {
                path: "/informacion-publica",
                element: <TransparenciaComite />
            },
            {
                path: "/aviso-privacidad",
                element: <AvisoPrivacidad />
            },
            {
                path: "/certificado-funcionamiento-SARE",
                element: <SAREPage />
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