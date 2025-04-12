import { useState } from "react";
import "./style/HeaderLayout.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { LuFacebook, LuInstagram, LuMail, LuTwitter, LuYoutube } from "react-icons/lu";
import { MenuLayout } from "./MenuLayout";

export const HeaderLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const redes = [
        {
            link: "https://www.facebook.com",
            icono: <LuFacebook className="icon" />
        },
        {
            link: "https://x.com/?lang=es",
            icono: <LuTwitter className="icon" />
        },
        {
            link: "https://www.instagram.com",
            icono: <LuInstagram className="icon" />
        },
        {
            link: "https://www.youtube.com/watch?v=fhnrrLxQEVQ",
            icono: <LuYoutube className="icon" />
        },
    ]
    const opciones = [
        "MUNICIPIO",
        "GOBIERNO",
        "ATENCIÓN CIUDADANA",
        "TRANSPARENCIA",
    ]

    return (
        <header className="header">
            {/* Correo */}
            <div className="container-border">
                <div className="container">
                    <div className="top-bar">
                        <a href="/"
                            className="contact-link"
                        >
                            <LuMail className="icon" />
                            <span className="email">contacto@municipio.gob.mx</span>
                        </a>
                        {/* Redes */}
                        <div className="social-links">
                            {redes.map((red) =>
                                <a href={red.link} key={red.link}>
                                    {red.icono}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Correo */}
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-content">
                        <div className="logo-nav">
                            <a href="/" className="logo-link">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7729.PNG-N4wQd9csCo9xGJAHC7pusSHLPWmOVN.png"
                                    alt="logo" className="logo-small"
                                    width={50} height={50}
                                />
                                <span className="logo-text">Paraíso</span>
                            </a>

                            <div className="desktop-nav">
                                {/* {opciones.map((e) => <a href={e}
                                    className="nav-link"
                                    key={e}>{e}</a>)} */}
                                <MenuLayout />
                            </div>
                        </div>

                        {/* Botton de Menu */}
                        <div className="mobile-menu-button">
                            <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                                {isMenuOpen ? <IoMdClose className="icon-large" /> : <HiOutlineBars3 className="icon-large" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* MenuMovil */}
            {isMenuOpen && (
                // <div className="lg:hidden bg-white border-b">
                <div className="container-movil">
                    <div className="menu-list">
                        {opciones.map((e) => <a href={e} key={e} className="menu-link">{e}</a>)}
                    </div>
                </div>
                // </div>
            )}
            {/* Fin MenuMovil */}
            {/* Cintillo */}
            {/* <div className="container-cintillo">
                <div className="container">
                    <div className="container-imag">
                        <a href="/">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPnO6RilYAavNITKONC0UhzMZkLJEgAiPHKey1GM20ZnbI1CGtnjEpwFL8e2PHXzFSNU&usqp=CAU"
                                alt="Logo Municipal Completo"
                                className="cintillo-img"
                            />
                        </a>
                    </div>
                </div>
            </div> */}
        </header>
    )
}
