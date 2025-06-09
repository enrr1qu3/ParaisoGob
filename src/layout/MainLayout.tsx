import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom"
import { HeaderLayout } from "./HeaderLayout"
import "./style/MainLayout.css"
import { FooterLayout } from "./FooterLayout"

export default function MainLayout() {
    const { pathname } = useLocation();
    useEffect(() => {
        // Al cambiar de ruta, volvemos al tope
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="contenedorLayout">
            <HeaderLayout />
            <Outlet />
            <FooterLayout />
        </div>
    )
}
