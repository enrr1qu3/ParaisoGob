import { Col, ConfigProvider, Row, Card, Breadcrumb, Divider, Image } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import "./Historia.css";

export default function Historia() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Divider: {
                        marginLG: 16
                    },
                },
            }}
        >
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
                    <Card
                        className='cardContainerTitulo'
                    >
                        <Breadcrumb
                            separator=">"
                            items={
                                [
                                    {
                                        href: '/',
                                        title: (
                                            <>
                                                <HomeOutlined />
                                                <span>Inicio</span>
                                            </>)
                                    },
                                    {
                                        title: 'Historia de Paraíso',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Historia de Paraíso
                        </h2>
                        <p className='subtituloP'>
                            Conoce los orígenes y desarrollo histórico de nuestro municipio
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Row
                        gutter={[24, 16]}
                        className='contenedorInfoParaiso'
                    >
                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '65%' }}
                        >
                            <Card>
                                <article>
                                    <h3>Orígenes</h3>
                                    <p>
                                        Paraíso es un municipio del estado mexicano de Tabasco, localizado en la
                                        región del río Grijalva y en la subregión de la Chontalpa. Su extensión es de 577.55 km², los cuales
                                        corresponden al 1.5% del total del estado; esto coloca al municipio en el decimoséptimo
                                        lugar en extensión territorial, lo que lo hace el más pequeño de los municipios de Tabasco.
                                    </p>

                                    <p>
                                        Se dice que en el año 10,000 a.c. los primeros hombres cruzaron por el estrecho de Bering y llegaron
                                        a las costas del Golfo de México, donde hoy se le conoce como Paraíso. La ciudad recibió su nombre
                                        debido a que Cristóbal Colón la denominó como su "Paraíso encontrado".
                                    </p>

                                    <h3>Toponimia</h3>
                                    <p>
                                        Existen dos teorías sobre el origen del nombre de Paraíso:
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                Se cree que el nombre de la ciudad proviene del nombre del "árbol de paraíso" o "Gracia de Dios", el cual abundaba
                                                mucho en la zona donde se fundó la población. Cabe destacar que contamos con una bebida muy rica y fresca llamada pozol, una bebida de cacao y agua.
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                Otra teoría de su nombre es la abundante flora y fauna que existe en dicha zona,
                                                lo que hace alusión a un paraíso en el edén, como se conoce a Tabasco, "El edén de México".
                                            </p>
                                        </li>
                                    </ul>

                                    <h3> Época Prehispánica</h3>
                                    <p>
                                        La región donde hoy se asienta Paraíso estuvo habitada por grupos olmecas y posteriormente
                                        por la cultura maya-chontal. Los chontales desarrollaron importantes centros
                                        ceremoniales y comerciales en la zona, aprovechando su ubicación estratégica en la
                                        costa del Golfo de México.
                                    </p>

                                    <h3>Época Colonial</h3>
                                    <p>
                                        Durante la conquista española, esta región fue explorada por expediciones que buscaban
                                        rutas comerciales. La riqueza natural de la zona atrajo a colonizadores que establecieron
                                        haciendas y desarrollaron actividades agrícolas y ganaderas.
                                    </p>

                                    <h3>Paraíso Contemporáneo</h3>
                                    <p>
                                        Actualmente, Paraíso es un importante centro económico en Tabasco. Al norte
                                        colinda con el Golfo de México, siendo su principal fuente de ingresos
                                        económicos la pesca, la industria petrolera y el turismo. Cuenta con una
                                        población de aproximadamente 96,741 habitantes y se localiza en la margen
                                        izquierda del río Seco.
                                    </p>
                                    <p>
                                        Se encuentra a una distancia de 78 km al noroeste de la ciudad de
                                        Villahermosa, capital del estado. Se comunica a través de la autopista
                                        estatal La Isla-Dos Bocas y está a 20 km de Comalcalco y a 58 km de
                                        Heroica Cárdenas.
                                    </p>

                                    <h3>Desarrollo Petrolero</h3>
                                    <p>
                                        Un capítulo fundamental en la historia reciente de Paraíso
                                        es el desarrollo de la industria petrolera. La construcción del
                                        Puerto de Dos Bocas y las instalaciones petroleras han transformado
                                        significativamente la economía y el paisaje del municipio, convirtiéndolo
                                        en un punto estratégico para la industria energética nacional.
                                    </p>
                                </article>
                            </Card>
                        </Col>

                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '35%' }}
                        >
                            <Row
                                gutter={[8, 16]}
                                className='contenedorMedias'
                            >
                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card
                                        className='cardRelevantes'
                                    >
                                        <h3>Datos Relevantes</h3>

                                        <h4>  Fundación:  </h4>
                                        <p>
                                            Época prehispánica, habitada por olmecas y mayas chontales
                                        </p>
                                        <Divider />
                                        <h4>Ubicación:</h4>
                                        <p>
                                            Región Grijalva, costa del Golfo de México
                                        </p>
                                        <Divider />
                                        <h4>Población:</h4>
                                        <p>
                                            Aproximadamente 96,741 habitantes
                                        </p>
                                        <Divider />
                                        <h4>Economía:</h4>
                                        <p>
                                            Pesca, industria petrolera y turismo
                                        </p>
                                        <Divider />
                                        <h4>Distancias:</h4>
                                        <p>
                                            78 km de Villahermosa
                                        </p>
                                        <p>
                                            20 km de Comalcalco
                                        </p>
                                        <p>
                                            58 km de Heroica Cárdenas
                                        </p>

                                    </Card>
                                </Col>

                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Galería Histórica</h3>
                                        <>
                                            <Image
                                                width={"100%"}
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ciudad_de_Para%C3%ADso_%288%29.jpg/1280px-Ciudad_de_Para%C3%ADso_%288%29.jpg"
                                            />
                                            <p>Vista histórica de Paraíso</p>
                                        </>
                                        <>
                                            <Image
                                                width={"100%"}
                                                src="https://blob.xevt.com//images/2024/01/13/crop-w1779-h1186-actividadesportuarias03-062dbe49-focus-0-0-900-400.jpg"
                                            />
                                            <p>Puerto de Dos Bocas</p>
                                        </>
                                        <>
                                            <Image
                                                width={"100%"}
                                                src="https://images.adsttc.com/media/images/66a7/ebe8/df91/fa64/85ca/e307/slideshow/malecon-cangrejo-azul-puerto-ceiba-laboratorio-de-acupuntura-urbana_5.jpg?1722281022"
                                            />
                                            <p>Malecón de Puerto Ceiba</p>
                                        </>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    )
}
