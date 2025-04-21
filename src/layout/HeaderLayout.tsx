import { useState } from "react";
import "./style/HeaderLayout.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { LuFacebook, LuInstagram, LuMail, LuTwitter, LuYoutube } from "react-icons/lu";
import { MenuLayout } from "./MenuLayout";
import { Link } from "react-router-dom";
import { MenuLayoutMovil } from "./MenuLayoutMovil";

export const HeaderLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const redes = [
        {
            link: "https://www.facebook.com/profile.php?id=61565179617663&mibextid=qi2Omg&rdid=jbwWs9f5IcemDaNa#",
            icono: <LuFacebook className="icon" />
        },
        {
            link: "https://x.com/Ayuntamiento_24",
            icono: <LuTwitter className="icon" />
        },
        {
            link: "https://www.instagram.com/ayuntamiento_de_paraiso?igsh=bTY5bHp4d244eHVu",
            icono: <LuInstagram className="icon" />
        },
        {
            link: "https://www.youtube.com/@AyuntamientoDeParaiso-g8j",
            icono: <LuYoutube className="icon" />
        },
    ];

    return (
        <header className="header">
            {/* Correo */}
            <div className="container-border">
                <div className="container">
                    <div className="top-bar">
                        <Link to="/"
                            className="contact-link"
                        >
                            <LuMail className="icon" />
                            <span className="email">contacto@municipio.gob.mx</span>
                        </Link>
                        {/* Redes */}
                        <div className="social-links">
                            {redes.map((red) =>
                                <a href={red.link} key={red.link} target="_blank">
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
                            <Link to="/" className="logo-link">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7729.PNG-N4wQd9csCo9xGJAHC7pusSHLPWmOVN.png"
                                    alt="logo" className="logo-small"
                                    width={50} height={50}
                                />
                                <h1 className="logo-text" style={{ fontWeight: "bold" }}>Paraíso</h1>
                            </Link>

                            <div className="desktop-nav">
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
                    <MenuLayoutMovil />
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
