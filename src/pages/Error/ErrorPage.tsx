import { Link } from "react-router-dom";
import { FooterLayout } from "../../layout/FooterLayout"
import { HeaderLayout } from "../../layout/HeaderLayout"
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./style/ErrorPage.css";
export const ErrorPage = () => {
    return (
        <div className="contenedorLayout">
            <HeaderLayout />
            <div className="contenedorError">
                <div className="contenedorInfo">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7729.PNG-N4wQd9csCo9xGJAHC7pusSHLPWmOVN.png"
                        alt="logo"
                        // width={300}
                        height={"auto"}
                        className="imagenInfo"
                    />
                    <h2 className="tituloPrincipal">
                        ¡Estamos trabajando para ti!
                    </h2>
                    <h3 className="tituloSecundario">
                        Muy pronto podrás disfrutar de nuestro nuevo sitio web
                    </h3>
                    <h4 className="tituloTerciario">
                        Municipio de Paraíso, Tabasco
                    </h4>
                    <p className="textoParrafo">"Legado que trasciende"</p>
                    <Link to={"/"} className="textoResesar">
                        <ArrowLeftOutlined />
                        Regresar
                    </Link>
                </div>
            </div>
            <FooterLayout />
        </div>)
}
