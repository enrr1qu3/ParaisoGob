import { useNavigate } from 'react-router-dom';
import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "../style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from '../components/Galeria';
import { FaFacebook } from 'react-icons/fa';

export const NoticiaAyuGobiFacilita = () => {
    const navigate = useNavigate();
    const imagenesGaleria: any = [
        // { id: 1, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg', alt: 'imagen1' },
        // { id: 2, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM(2).jpeg', alt: 'imagen2' },
        // { id: 3, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM(3).jpeg', alt: 'imagen3' },
    ];

    return (
        <ConfigProvider>
            <Row
                style={{
                    maxWidth: "87.5rem",
                    width: "100%",
                    margin: "2rem auto",
                    padding: " 0 1rem "
                }}
                gutter={[0, 24]}
            >
                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Button icon={<ArrowLeftOutlined />}
                        onClick={() => navigate("/")}
                    >
                        Volver
                    </Button>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Row
                        gutter={[24, 16]}
                    >
                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '65%' }}
                        >
                            <Card>
                                <h2 className='tituloNoticia'>
                                    AYUNTAMIENTO Y GOBIERNO DEL PUEBLO
                                    FACILITAN TRÁMITES VEHICULARES EN PARAÍSO

                                </h2>

                                <img
                                    src={
                                        "https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/525984218_122183410310505987_7172928550211851012_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHDL1fGQNSy5CA-PWTljcG0VGefh-V5uYBUZ5-H5Xm5gKd5CK6PA1iT85T8HxfrVnISm5lDUP9pfpgS4kcawVDl&_nc_ohc=DnSCRmwP_tMQ7kNvwEr6m7H&_nc_oc=AdmsZH8Z-BGxB00n95sy_jMCqj7N5E5hnxXZAH29nv_-N0_-fHm8OiW8eleEJgsPqkQ13Hb33Ci-wYvTVdY-_CgC&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=AC2kqyYWNcSLKdNXPHr9ew&oh=00_AfQa7oSG1t2212LVP9KtuK-RxIUom24BF1mSSg-ywyCQDg&oe=688DFAD9"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        Con gran participación se desarrolla la Jornada de Atención Ciudadana
                                        impulsada por el Gobierno del Estado, en coordinación con el Ayuntamiento de
                                        Paraíso, con el objetivo de acercar servicios que permitan facilitar
                                        trámites vehiculares y de motocicletas a la población.
                                    </p>
                                    <p>
                                        Esta actividad tiene lugar en la Escuela Primaria “Dalila Hernández Olivé”,
                                        ubicada en la colonia Moctezuma, donde personal de la Delegación Paraíso de
                                        la Policía Estatal de Caminos, a cargo de Sergio Simón Montalvo Wilson, atiende
                                        directamente a la ciudadanía.
                                    </p>
                                    <p>
                                        Durante la jornada se brindan servicios como alta de vehículos, refrendo vehicular, verificación vehicular, cambio de propietario y expedición de licencias de conducir, todo en un mismo espacio y de manera ágil.
                                    </p>
                                    <p>
                                        Durante la jornada se brindan servicios como alta de vehículos, refrendo vehicular, verificación vehicular, cambio de propietario y expedición de licencias de conducir, todo en un mismo espacio y de manera ágil.
                                    </p>
                                    <p>
                                        Asimismo, personal de la Dirección de Tránsito Municipal imparte cursos de vialidad, un requisito indispensable para obtener la constancia de educación vial, contribuyendo así a una mejor cultura ciudadana y de seguridad en las calles.
                                    </p>
                                    <Button size='large'
                                        type='link'
                                        href="https://www.facebook.com/share/p/1A8ecSKiQ7/?mibextid=wwXIfr"
                                        target="_blank"
                                        icon={<FaFacebook />}
                                    />
                                </article>
                                <p></p>
                                <Row>
                                    <Col>
                                        <h3 className='tituloGaleria'>
                                            Galería de imágenes
                                        </h3>
                                    </Col>
                                    <Col

                                    >
                                        <Galeria imagenes={imagenesGaleria} />
                                    </Col>
                                </Row>

                            </Card>
                        </Col>

                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '35%' }}
                        >
                            <Row
                                gutter={[8, 16]}
                            >
                                {/* <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Noticias relacionadas</h3>

                                    </Card>
                                </Col>
                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Síguenos en redes sociales</h3>

                                    </Card>
                                </Col> */}

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    )
}