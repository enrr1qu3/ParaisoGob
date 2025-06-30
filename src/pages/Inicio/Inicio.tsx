
import 'swiper/swiper-bundle.css';
import { Button, Card } from 'antd';

import { SwiperInicio } from './components/SwiperInicio';
import { CartasInicio } from './components/CartasInicio';
import {
    DownloadOutlined
} from '@ant-design/icons';
export default function Inicio() {

    const handleDownload = () => {
        // Crea un elemento <a>
        const link = document.createElement('a');
        // Establece la ruta del archivo
        link.target = "_blank"
        link.href = 'https://gobparaiso.blob.core.windows.net/transparencia/PAGINA_PRINCIPAL/Plan Municipal de Desarrollo 2024 - 2027.pdf'
        // Establece el nombre del archivo para la descarga
        link.download = 'Plan Municipal de Desarrollo 2024 - 2027';
        // Simula un clic en el enlace
        link.click();
    };

    return (
        <div>
            <SwiperInicio />
            <div className="container">
                <Card
                    style={{ margin: "3rem 0rem 0rem 0rem ", }}
                >
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <h2 style={{ margin: 0, color:"#f26c0d" }}>
                            Plan Municipal de Desarrollo 2024 - 2027
                        </h2>
                        <Button color="orange" variant="outlined"
                            onClick={handleDownload}
                            type='link' icon={<DownloadOutlined />} >
                            Descargar
                        </Button>
                    </div>
                </Card>
                <CartasInicio />
            </div>
        </div >
    )
}
