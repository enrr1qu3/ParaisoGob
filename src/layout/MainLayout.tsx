import { Outlet } from "react-router-dom"
import { HeaderLayout } from "./HeaderLayout"
import "./style/MainLayout.css"
import { FooterLayout } from "./FooterLayout"

export default function MainLayout() {
    return (
        <div className="contenedorLayout">
            <HeaderLayout />
            <Outlet />
            <FooterLayout />
        </div>
    )
}
