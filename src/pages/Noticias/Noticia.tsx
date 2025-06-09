import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "./style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from './components/Galeria';
import { useNavigate } from 'react-router-dom';
export default function Noticia() {
    const navigate = useNavigate();
    const imagenesGaleria = [
        { id: 1, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.38 AM(1).jpeg', alt: 'imagen1' },
        { id: 2, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.38 AM(2).jpeg', alt: 'imagen2' },
        { id: 3, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.38 AM(3).jpeg', alt: 'imagen3' },
        { id: 4, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.38 AM(4).jpeg', alt: 'imagen4' },
        { id: 5, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.38 AM.jpeg', alt: 'imagen5' },
        { id: 6, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.39 AM(1).jpeg', alt: 'imagen6' },
        { id: 7, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.39 AM(2).jpeg', alt: 'imagen7' },
        { id: 8, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.39 AM(3).jpeg', alt: 'imagen8' },
        { id: 9, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.39 AM(4).jpeg', alt: 'imagen9' },
        { id: 10, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.39 AM(5).jpeg', alt: 'imagen10' },
        { id: 11, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.39 AM.jpeg', alt: 'imagen11' },
        { id: 12, src: 'https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg', alt: 'imagen12' },
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
                                    Paraíso Recibe con Entusiasmo al Ballet Folklórico Usim Yeye de Sonora en Intercambio Cultural
                                </h2>

                                <img
                                    src={
                                        "https://gobparaiso.blob.core.windows.net/noticias/Paraíso%20Ballet%20Folklórico/WhatsApp%20Image%202025-06-09%20at%2010.40.38%20AM(2).jpeg"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        Paraíso, Tabasco a 7 de junio de 2025 – El municipio de Paraíso se viste de fiesta cultural
                                        al dar la bienvenida hoy al Ballet Folklórico Usim Yeye del estado de Sonora. Esta destacada
                                        agrupación, cuyo nombre en lengua mayo significa "Niños Bailando", llega para compartir y celebrar
                                        con orgullo las ricas tradiciones y raíces culturales del norte de México.
                                    </p>
                                    <p>
                                        El talentoso ballet sonorense tendrá dos importantes presentaciones en nuestro municipio:
                                    </p>
                                    <Row gutter={[8, 8]}>
                                        <Col
                                            xs={{ flex: '100%' }}
                                            xl={{ flex: '50%' }}
                                        >
                                            <video
                                                controls
                                                style={{ width: '100%', borderRadius: 4 }}
                                            >
                                                <source src="https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Video 2025-06-09 at 10.40.37 AM.mp4" type="video/mp4" />
                                                Tu navegador no soporta el elemento <code>video</code>.
                                            </video>
                                        </Col>
                                        <Col
                                            xs={{ flex: '100%' }}
                                            xl={{ flex: '50%' }}
                                        >
                                            <video
                                                controls
                                                style={{ width: '100%', borderRadius: 4 }}
                                            >
                                                <source src="https://gobparaiso.blob.core.windows.net/noticias/Paraíso Ballet Folklórico/WhatsApp Video 2025-06-09 at 10.40.38 AM.mp4" type="video/mp4" />
                                                Tu navegador no soporta el elemento <code>video</code>.
                                            </video>
                                        </Col>
                                    </Row>
                                    <p>

                                        Sábado Cultural: Se presentarán en el Parque Central de Paraíso, ofreciendo al público un espectáculo vibrante de danza folklórica.
                                        Clausura de la Feria de la Marina 2025: Formarán parte del gran cierre de la Feria, que se llevará a cabo en Puerto Ceiba, compartiendo escenario con el Ballet de la Casa de la Cultura de Paraíso, en una muestra de talento y unión artística.
                                        Además de sus presentaciones, el Ballet Usim Yeye participará activamente en talleres de formación e intercambio cultural. Estas sesiones
                                        permitirán fortalecer lazos y conocimientos con el Ballet Folklórico de Nacajuca, el Ballet de Jalpa y el Ballet de la Casa de la Cultura de Paraíso,
                                        enriqueciendo así el panorama dancístico de la región.
                                    </p>

                                    <p>

                                        Este intercambio cultural es una celebración de la unión de tradiciones y un orgullo para nuestras raíces mexicanas. Invitamos a toda la comunidad a acompañarnos y ser parte de esta memorable experiencia cultural que promueve la diversidad y el talento artístico.
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
