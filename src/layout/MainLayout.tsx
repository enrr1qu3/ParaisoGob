import { Outlet } from "react-router-dom"
import { HeaderLayout } from "./HeaderLayout"
import "./style/MainLayout.css"
import { FooterLayout } from "./FooterLayout"
// interface MainLayoutProps {
//     children: React.ReactNode
// }
export default function MainLayout() {
    return (
        <div className="contenedorLayout">
            <HeaderLayout />
            <Outlet />
            <FooterLayout />
        </div>
    )
}
