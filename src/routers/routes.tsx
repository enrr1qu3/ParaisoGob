import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Inicio from "../pages/Inicio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <>Error1</>,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: "noticias",
                element: <>Noticia</>
            },
            {
                path: "transparencia",
                element: <>transparencia</>
            },

        ]
    },

]);