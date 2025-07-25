
import 'swiper/swiper-bundle.css';
import { Button, Card, Col, Image, Row } from 'antd';

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

                        <h2 style={{ margin: 0, color: "#f26c0d" }}>
                            Plan Municipal de Desarrollo 2024 - 2027
                        </h2>
                        <Button color="orange" variant="outlined"
                            onClick={handleDownload}
                            type='link' icon={<DownloadOutlined />} >
                            Descargar
                        </Button>
                    </div>
                    <Row gutter={[8, 8]} style={{ marginTop: 10 }}>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://gobparaiso.blob.core.windows.net/transparencia/BANNERS/BANNER  PNCS (1RA. CATEGORÍA).jpg' />
                        </Col>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://gobparaiso.blob.core.windows.net/transparencia/BANNERS/BANNER  PNCS (2DA. CATEGORÍA).jpg' />
                        </Col>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://gobparaiso.blob.core.windows.net/transparencia/BANNERS/BANNER  PNCS (AMBAS CATEGORÍAS).jpg' />
                        </Col>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://gobparaiso.blob.core.windows.net/transparencia/BANNERS/BANNER CNTC 2025.jpg' />
                        </Col>
                    </Row>
                </Card>
                <CartasInicio />
            </div>
        </div >
    )
}
