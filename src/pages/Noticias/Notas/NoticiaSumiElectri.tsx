import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "../style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from '../components/Galeria';
import { useNavigate } from 'react-router-dom';

export const NoticiaSumiElectri = () => {
     const navigate = useNavigate();
    const imagenesGaleria = [
        { id: 1, src: 'https://gobparaiso.blob.core.windows.net/noticias/Alcalde Alfonso Baca Sevilla Impulsa/WhatsApp Image 2025-06-09 at 10.40.41 AM.jpeg', alt: 'imagen1' },
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
                                    Alcalde Alfonso Baca Sevilla Impulsa Soluciones para Mejorar el Suministro Eléctrico en Paraíso
                                </h2>

                                <img
                                    src={
                                        "https://gobparaiso.blob.core.windows.net/noticias/Alcalde Alfonso Baca Sevilla Impulsa/WhatsApp Image 2025-06-09 at 10.40.41 AM.jpeg"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        Paraíso, Tabasco. – El Presidente Municipal de Paraíso, Mtro.
                                        Alfonso Baca Sevilla, sostuvo hoy una crucial reunión de gestión
                                        interinstitucional con altos representantes de la Comisión
                                        Federal de Electricidad (CFE) Zona Chontalpa. El encuentro tuvo
                                        como objetivo principal abordar y establecer soluciones definitivas
                                        a las problemáticas en la distribución de energía eléctrica que
                                        han afectado a diversas comunidades del municipio.
                                    </p>
                                    <p>
                                        Durante la reunión, se analizaron y acordaron acciones específicas
                                        para mejorar el servicio en las siguientes localidades: Torno Largo,
                                        La Madrid, El Bellote, Ejido Banco, Chiltepec sección Tanques, Ejido
                                        y Ranchería Aquiles Serdán, y La Isla Andrés García.
                                    </p>
                                    <p>
                                        Asimismo, se abordaron las necesidades de las comunidades de Las Flores
                                        1ra., 2da. y 3ra., así como La Unión 1ra., 2da., 3ra., Guano Solo y La Barra.

                                    </p>
                                    <p>
                                        El Alcalde Alfonso Baca Sevilla enfatizó la importancia de esta
                                        colaboración, destacando que "esta reunión es un paso fundamental
                                        para asegurar que nuestros ciudadanos cuenten con un servicio eléctrico
                                        eficiente y confiable". Reafirmó su compromiso de "continuar trabajando
                                        en alianza con la CFE para garantizar el bienestar de todas las familias
                                        paraiseñas."
                                    </p>
                                    <p>
                                        Por su parte, el almirante Gregorio Martínez Núñez reconoció los notables
                                        avances de la administración municipal y la visible mejora en las acciones
                                        que benefician directamente a los ciudadanos de Paraíso. Subrayó la plena
                                        disposición de ASIPONA para seguir contribuyendo activamente al bienestar
                                        de los paraiseños.
                                    </p>
                                    <p>
                                        Por parte de la CFE, estuvieron presentes el Lic. José Adán Utrera Ballester,
                                        de Atención al Cliente CFE Paraíso; el Ing. Saúl Cruz Palomec, Superintendente
                                        de Área CFE Comalcalco; y el Ing. Josué Ruiz López, Jefe de Departamento
                                        de Distribución Zona Chontalpa.
                                    </p>
                                    <p>
                                        Esta iniciativa subraya el compromiso de la administración municipal con la
                                        mejora continua de los servicios básicos y la calidad de vida de sus habitantes.
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
