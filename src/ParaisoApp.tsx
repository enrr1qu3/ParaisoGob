import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";
import './ParaisoApp.css'
export default function ParaisoApp() {
    return (
        <RouterProvider router={router} />
    )
}
