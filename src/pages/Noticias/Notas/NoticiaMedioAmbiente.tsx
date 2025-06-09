import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "../style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from '../components/Galeria';
import { useNavigate } from 'react-router-dom';

export const NoticiaMedioAmbiente = () => {
     const navigate = useNavigate();
    const imagenesGaleria = [
        { id: 1, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM(1).jpeg', alt: 'imagen1' },
        { id: 2, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM(2).jpeg', alt: 'imagen2' },
        { id: 3, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM(3).jpeg', alt: 'imagen3' },
        { id: 4, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM(4).jpeg', alt: 'imagen4' },
        { id: 5, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM(5).jpeg', alt: 'imagen5' },
        { id: 6, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM.jpeg', alt: 'imagen6' },
        { id: 7, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.49 AM(1).jpeg', alt: 'imagen7' },
        { id: 8, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.49 AM(2).jpeg', alt: 'imagen8' },
        { id: 9, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.49 AM.jpeg', alt: 'imagen9' },
        { id: 10, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.50 AM(1).jpeg', alt: 'imagen10' },
        { id: 11, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.50 AM(2).jpeg', alt: 'imagen11' },
        { id: 12, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.50 AM(3).jpeg', alt: 'imagen12' },
        { id: 14, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.50 AM(4).jpeg', alt: 'imagen12' },
        { id: 15, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.50 AM.jpeg', alt: 'imagen12' },
        { id: 16, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.51 AM(1).jpeg', alt: 'imagen12' },
        { id: 17, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.51 AM(2).jpeg', alt: 'imagen12' },
        { id: 18, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.51 AM(3).jpeg', alt: 'imagen12' },
        { id: 19, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.51 AM(4).jpeg', alt: 'imagen12' },
        { id: 20, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.51 AM.jpeg', alt: 'imagen12' },
        { id: 21, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.52 AM(1).jpeg', alt: 'imagen12' },
        { id: 22, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.52 AM(2).jpeg', alt: 'imagen12' },
        { id: 23, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.52 AM.jpeg', alt: 'imagen12' },
        { id: 24, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.53 AM(1).jpeg', alt: 'imagen12' },
        { id: 25, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.53 AM(2).jpeg', alt: 'imagen12' },
        { id: 26, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.53 AM(3).jpeg', alt: 'imagen12' },
        { id: 27, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.53 AM.jpeg', alt: 'imagen12' },
        { id: 28, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.54 AM(1).jpeg', alt: 'imagen12' },
        { id: 29, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.54 AM(2).jpeg', alt: 'imagen12' },
        { id: 30, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.54 AM.jpeg', alt: 'imagen12' },
        { id: 31, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.55 AM.jpeg', alt: 'imagen12' },
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
                                    Paraíso Celebra el Día Mundial del Medio Ambiente con un Firme Compromiso por Mares Libres de Plástico y un Futuro Sostenible
                                </h2>

                                <img
                                    src={
                                        "https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM.jpeg"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        Paraíso, Tabasco a 5 de junio de 2025 – En un llamado contundente a la acción, el municipio de Paraíso conmemoró hoy el Día Mundial del Medio Ambiente con una serie de actividades enfocadas en la preservación de nuestros ecosistemas terrestres y marinos, destacando la visión y el compromiso del presidente municipal, Alfonso Baca Sevilla.
                                    </p>
                                    <p>
                                        “El llamado es claro: mantengamos nuestros mares libres de plásticos. Se trata de un legado que trasciende nuestras comunidades, de mirar más allá. Sigamos trabajando por el mar, nuestro origen y nuestra fuente de vida y sustento”, afirmó el alcalde Baca Sevilla, subrayando la importancia crucial de proteger nuestros océanos, fuente vital para la comunidad.
                                    </p>
                                    <p>
                                        Las instalaciones de Playa del Sol fueron el epicentro de esta jornada de concientización, que incluyó una reforestación masiva con más de 1,000 árboles de diversas especies, un paso significativo hacia la recuperación y fortalecimiento de nuestros valiosos ecosistemas. Los asistentes también se beneficiaron de una conferencia magistral impartida por el Ing. Francisco Urzúa, que aportó conocimientos clave sobre sostenibilidad.
                                    </p>
                                    <Row gutter={[8, 8]}>
                                        <Col
                                            xs={{ flex: '100%' }}
                                            xl={{ flex: '100%' }}
                                        >
                                            <video
                                                controls
                                                style={{ width: '100%', borderRadius: 4 }}
                                            >
                                                <source src="https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Video 2025-06-09 at 10.40.41 AM.mp4" type="video/mp4" />
                                                Tu navegador no soporta el elemento <code>video</code>.
                                            </video>
                                        </Col>
                                    </Row>
                                    <p>
                                        El evento fue también una plataforma para showcasing el ingenio y la dedicación de las nuevas generaciones, con la presentación de proyectos sustentables desarrollados por diversas escuelas de Paraíso, incluyendo las destacadas participaciones de PREFECO, UVT y CETMAR 38, así como la presencia de la UPGM. Estos proyectos reflejan el compromiso de la juventud con soluciones innovadoras para los desafíos ambientales.
                                    </p>
                                    <p>
                                        En un emotivo momento, se rindió un merecido reconocimiento a la trayectoria laboral de ciudadanos ejemplares que han contribuido significativamente al bienestar de nuestra comunidad: el Sr. Sebastián López Peregrino, el Sr. Vicente Domínguez Arias y la Sra. Elba Doris De la Cruz Domínguez.

                                    </p>
                                    <p>
                                        El evento contó con la distinguida presencia de importantes autoridades que respaldaron la iniciativa, entre ellas el Lic. José Pablo Custodio Rodríguez, subdirector de Recuperación de Ecosistemas de la Secretaría de Medio Ambiente y Desarrollo Sustentable del Estado de Tabasco; el Mtro. Isidro de la Cruz García, delegado de Las Flores 3ra; el Ing. Leonardo Caamal Yam, director de Protección Ambiental del municipio; y diversas autoridades portuarias.

                                    </p>
                                    <p>
                                        El Día Mundial del Medio Ambiente en Paraíso reafirmó el compromiso de la administración municipal y de la comunidad en general con la construcción de un futuro más verde y azul, donde la sostenibilidad sea un pilar fundamental para el desarrollo.
                                    </p>
                                </article>
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