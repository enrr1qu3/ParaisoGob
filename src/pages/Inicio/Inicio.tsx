import { Button, Card } from 'antd';

import 'swiper/swiper-bundle.css';

import { SwiperInicio } from './components/SwiperInicio';
import { CartasInicio } from './components/CartasInicio';
import { Anuncios } from './components/Anuncios';
import {
    DownloadOutlined
} from '@ant-design/icons';
import { ReleaseComponent } from './components/ReleaseComponent';

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
    const handleDownloadConvocatory = () => {
        // Crea un elemento <a>
        const link = document.createElement('a');
        // Establece la ruta del archivo
        link.target = "_blank"
        link.href = 'https://gobparaiso.blob.core.windows.net/transparencia/CONVOCATORIA PARA LA ENAJENACION DE 493 BIENES MUEBLES PROPIEDAD DEL AYUNTAMIENTO DE PARAISO.pdf'
        // Establece el nombre del archivo para la descarga
        link.download = 'CONVOCATORIA PARA LA ENAJENACION DE 493 BIENES';
        // Simula un clic en el enlace
        link.click();
    };
    const handleDownloadAtlas = () => {
        // Crea un elemento <a>
        const link = document.createElement('a');
        // Establece la ruta del archivo
        link.target = "_blank"
        link.href = 'https://gobparaiso.blob.core.windows.net/transparencia/PAGINA_PRINCIPAL/Atlas_de_Peligros_Paraiso.pdf'
        // Establece el nombre del archivo para la descarga
        link.download = 'Plan Municipal de Desarrollo 2024 - 2027';
        // Simula un clic en el enlace
        link.click();
    };

    return (
        <div>
            <SwiperInicio />
            <ReleaseComponent />
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
                </Card>

                <Card
                    style={{ margin: "3rem 0rem 0rem 0rem ", }}
                >
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <h2 style={{ margin: 0, color: "#f26c0d" }}>
                            Atlas de Peligros del Municipio de Paraíso
                        </h2>
                        <Button color="orange" variant="outlined"
                            onClick={handleDownloadAtlas}
                            type='link' icon={<DownloadOutlined />} >
                            Descargar
                        </Button>
                    </div>
                </Card>
                <Anuncios />
                <CartasInicio />
                {/* <Card
                    style={{ margin: "3rem 0rem 0rem 0rem ", }}
                >
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
                </Card> */}
                <Card
                    style={{ marginBottom: 20 }}
                >
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <h2 style={{ margin: 0, color: "#f26c0d" }}>
                            Convocatoria para la  enajenación de 493 bienes muebles
                        </h2>
                        <Button color="orange" variant="outlined"
                            onClick={handleDownloadConvocatory}
                            type='link' icon={<DownloadOutlined />} >
                            Descargar
                        </Button>
                    </div>
                </Card>
            </div>
        </div >
    )
}
