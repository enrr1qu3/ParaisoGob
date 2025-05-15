import { Link } from "react-router-dom"
import "./style/MenuTransparencia.css"
import {
    ArrowLeftOutlined,
    FilePdfOutlined,
    HomeOutlined,
} from '@ant-design/icons';
export const MenuTransparencia = () => {
    return (
        <div className="contenMenu" >
            <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7729.PNG-N4wQd9csCo9xGJAHC7pusSHLPWmOVN.png"
                alt="logo"
                // width={300}
                height={"auto"}
                className="imagenMenu"
            />
            <div className="contenedorLinks">
                <Link to={"/transparencia/inicio"} className="linkNormal">
                    < HomeOutlined />
                    Inicio
                </Link>
                <Link to={"/"} className="linkNormal">
                    <ArrowLeftOutlined />
                    Pagina principal
                </Link>

                <Link to={"/transparencia/archivos-publicados"} className="linkPDf">
                    <FilePdfOutlined />
                    Archivos publicados
                </Link>
                <a target="_blank" href="http://www.itaip.org.mx/site/"

                >
                    <img src="https://transparencia.comalcalco.gob.mx/src/itaip_logo.png"
                        alt="itaip"
                        style={{ width: "100%", border:"1px solid #000" }}
                    />
                </a>
            </div>
        </div>
    )
}
