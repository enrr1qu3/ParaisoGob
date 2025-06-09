import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "../style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from '../components/Galeria';
import { useNavigate } from 'react-router-dom';

export const NoticiaASIPONA = () => {

     const navigate = useNavigate();
    const imagenesGaleria = [
        { id: 1, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg', alt: 'imagen1' },
        { id: 2, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM(2).jpeg', alt: 'imagen2' },
        { id: 3, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM(3).jpeg', alt: 'imagen3' },


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
                                    ASIPONA y Ayuntamiento de Paraíso Refuerzan Colaboración para el
                                    Progreso del municipio
                                </h2>

                                <img
                                    src={
                                        "https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        La Administración del Sistema Portuario Nacional (ASIPONA) en Paraíso
                                        y el Ayuntamiento local reafirmaron hoy su compromiso de trabajo
                                        conjunto durante un encuentro clave celebrado en las instalaciones
                                        de ASIPONA. Esta reunión, que busca fortalecer los lazos de
                                        cooperación interinstitucional, contó con la presencia del
                                        presidente municipal, Alfonso Jesús Baca Sevilla, y el director
                                        general de ASIPONA Paraíso, almirante retirado Gregorio Martínez Núñez.

                                    </p>
                                    <p>
                                        Durante la sesión, el presidente Baca Sevilla presentó los avances y obras
                                        más significativas de su administración, destacando logros en áreas estratégicas
                                        como la seguridad pública, la infraestructura, la mejora de servicios
                                        públicos y las gestiones comunitarias.
                                        También resaltó el aumento en la confianza
                                        de los inversionistas, lo que augura futuros proyectos para el municipio.
                                    </p>
                                    <p>
                                        Estos encuentros son fundamentales para fortalecer la colaboración y generar
                                        nuevas oportunidades que impulsen el desarrollo sostenido de Paraíso.
                                    </p>
                                    <p>
                                        El presidente municipal expresó su gratitud por la hospitalidad
                                        y la oportunidad de dialogar, y reiteró el compromiso de su
                                        gobierno con todas las empresas y dependencias establecidas en la región.

                                    </p>
                                    <p>
                                        Por su parte, el almirante Gregorio Martínez Núñez reconoció los notables
                                        avances de la administración municipal y la visible mejora en las acciones
                                        que benefician directamente a los ciudadanos de Paraíso. Subrayó la plena
                                        disposición de ASIPONA para seguir contribuyendo activamente al bienestar
                                        de los paraiseños.
                                    </p>
                                    <p>
                                        Directivos de ambas instituciones estuvieron presentes en esta importante
                                        reunión, consolidando una alianza estratégica en favor del progreso de Paraíso.
                                    </p>
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