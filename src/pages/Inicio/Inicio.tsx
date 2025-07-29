
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
                    <Row gutter={[8, 8]} style={{ marginTop: 10, textAlign: "center" }}>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524129252_122183398922505987_1554585239385295218_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqZYKDbjXxb8Gdt3wb3a4v3T7Qh6ZWNRPdPtCHplY1E0yH1eDFrHcdMvWs0hmvfW0bb4BT3_Chqbi7z7Yp-QRw&_nc_ohc=gfkqXUmjYE4Q7kNvwGRjMuH&_nc_oc=Admbz1UUhc8B1UzOIGLTkRMm2G2ZxV2wlKSP8_I-dUoxzFQ1TjF8zBp2B_diqfvAAil9_KOlmWgt8HIUuyZKz_HG&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=2dNuh2OMjt80ldLihcFEDQ&oh=00_AfS1-AJF1W2y5Zx9RrLEhTCtcpr7HFaPIPG3dOlDVFbAXA&oe=688DF79F' />
                            <Button size='large' type='link' href="https://www.facebook.com/share/p/1FYJkfb1hg/?mibextid=wwXIfr" target="_blank">Más Informacion</Button>
                        </Col>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524922430_122183390840505987_299499171823405578_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXmejr2pMQkm0rRxx64JKuQM2ktkRdySBAzaS2RF3JIK4o_b7sAOLrCJIz1oqI4lViY_Zv1RsnIY_aqCJ69YuZ&_nc_ohc=DCziLz-AXNQQ7kNvwGNTFYx&_nc_oc=AdlctgHUX90OXHL6BuEt3B9wb_SpEyrnZw2GHHdQ2nYVcs2_hcjDSzc6BDJRMVElXC-hSk0nIdIu7RE7ydBFOhib&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=6ZTDIxcZsbQFCfFjX7VbDA&oh=00_AfT2IIbcDxjOEZApTgUdgLMOz0ANgXW2gYKzaseai53ceg&oe=688E0C50' />
                            <Button size='large' type='link' href="https://www.facebook.com/share/p/1AioG9Regh/?mibextid=wwXIfr" target="_blank">Más Informacion</Button>

                        </Col>
                        <Col
                            xs={{ flex: '50%' }}
                            xl={{ flex: '25%' }}
                        >
                            <Image src='https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524754644_122183384216505987_3481552598953378711_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6L5Hx45L4Js7EFnPmUqwGzYe6bBw_e9rNh7psHD972rsDdSVW7-3YnGBtvW-7ByrBBzDzDRlWt1EW8bK2k5lV&_nc_ohc=QBz2uf38xM0Q7kNvwHbXagb&_nc_oc=AdlUpoZoGkDvgXgFvc9L6AmgZvYzNLxARVJte3l1DLrBwH01lZErnIJwtQVU9znV04K2u63xbX2lw1VUPyJANCdx&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=Eeohxf75o0IuNztdgcTv4Q&oh=00_AfRVxmTcpOuHe6AI9bejs6dumAat-rOlJGMHGQEOpSBbZA&oe=688E14B7' />
                            <Button size='large' type='link' href="https://www.facebook.com/share/p/1EYVgcSTRA/?mibextid=wwXIfr" target="_blank">Más Informacion</Button>

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
                <Card
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

                    </Row>
                </Card>
            </div>
        </div >
    )
}
