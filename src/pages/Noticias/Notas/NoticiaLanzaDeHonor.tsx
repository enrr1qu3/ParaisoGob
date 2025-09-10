import { useNavigate } from 'react-router-dom';
import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "../style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from '../components/Galeria';
import { FaFacebook } from 'react-icons/fa';

export const NoticiaLanzaDeHonor = () => {
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
                                    PRESIDENTE MUNICIPAL DE PARAÍSO REALIZA LANZAMIENTO DE HONOR EN JUEGO DE LOS OLMECAS DE TABASCO
                                </h2>

                                <img
                                    src={
                                        "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/524306314_122183241044505987_6685868173445221665_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrOPN0d53YWV1ZhsylL5uwGf638Fdk0FoZ_rfwV2TQWtU2pZY-ZxkhQW4hMuoqcGodF_Mav7vAZCjLqJUhDyWb&_nc_ohc=FfVTLw5oIfYQ7kNvwEYP8jC&_nc_oc=AdmKOe2FS1GGW0y8BdksSTFOb7tGqqUgb9wnT1F5DijLwsmkbe_CbwWK69I5FEOSa4E&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Pszy4WQVwHMGvnEMejL7gw&oh=00_AfZrS1LICyfXOv2ESgDogYrk6gKD16uiowV3ewf-WP32gQ&oe=68C7DC7F"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        Esta tarde, el Presidente Municipal de Paraíso, Ingeniero Alfonso Baca Sevilla, participó como invitado especial en el estadio Centenario 27 de Febrero, donde realizó el lanzamiento de la primera bola en el último juego de la serie entre los Olmecas de Tabasco y los Conspiradores de Querétaro.
                                    </p>
                                    <p>

                                        Este gesto simbólico, promovido por el Club Olmecas con el respaldo de Caliente. mx, forma parte de las actividades institucionales que reconocen a municipios que trabajan por fortalecer el tejido social y el impulso a la comunidad.

                                    </p>
                                    <p>
                                        Paraíso estuvo presente en un espacio que reúne tradición, identidad y pasión por el deporte.
                                    </p>

                                    <Button size='large'
                                        type='link'
                                        href="https://www.facebook.com/share/p/16gWqvA9yQ/?mibextid=wwXIfr"
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