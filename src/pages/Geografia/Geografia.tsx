import { Col, ConfigProvider, Row, Card, Breadcrumb, Divider, Image } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
export default function Geografia() {
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
                                        title: 'Geografía de Paraíso',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Geografía de Paraíso
                        </h2>
                        <p className='subtituloP'>
                            Conoce las características geográficas de nuestro municipio
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
                                    <h3>Ubicación</h3>
                                    <p>
                                        Paraíso es la cabecera del municipio homónimo en el estado
                                        mexicano de Tabasco. Está ubicada dentro de la región del
                                        Grijalva y pertenece a la subregión de la Chontalpa. Al norte colinda
                                        con el Golfo de México, su principal fuente de ingresos económicos como
                                        la pesca, la industria petrolera y el turismo.
                                    </p>

                                    <p>
                                        Cuenta con una población de 96,741 habitantes aproximadamente, y se localiza
                                        en la margen izquierda del río Seco. Se encuentra a una distancia de 78 km al
                                        noroeste de la ciudad de Villahermosa, capital del estado, con la que se comunica
                                        a través de la autopista estatal La Isla-Dos Bocas. Se encuentra a 20 km de la
                                        ciudad de Comalcalco y a 58 km de Heroica Cárdenas.
                                    </p>

                                    <h3>Orografía</h3>
                                    <p>
                                        El municipio de Paraíso se encuentra ubicado en la región de la Chontalpa, en
                                        la llanura costera del Golfo de México, con una altitud promedio de 10 metros
                                        sobre el nivel del mar. Su territorio es prácticamente plano, con ligeras
                                        ondulaciones y pequeñas elevaciones que no superan los 20 metros de altura.
                                    </p>

                                    <h3>Hidrografía</h3>
                                    <p>
                                        El municipio cuenta con importantes recursos hidrológicos. Está bañado por los
                                        ríos Seco, González y Verde, además de contar con numerosas lagunas como El Zorro,
                                        Mecoacán, La Machona y parte de la Laguna de Términos. La costa del municipio se
                                        extiende a lo largo del Golfo de México, donde se encuentra el Puerto
                                        de Dos Bocas, uno de los principales puertos petroleros del país.
                                    </p>

                                    <h3>Clima</h3>
                                    <p>
                                        El clima predominante en Paraíso es cálido húmedo con abundantes lluvias en
                                        verano. La temperatura media anual es de 26°C, con una máxima de 36°C en los meses
                                        de mayo y junio, y una mínima de 18°C en enero. La precipitación pluvial media anual
                                        es de 1,800 mm, siendo los meses más lluviosos de junio a octubre.
                                    </p>

                                    <h3>Flora y Fauna</h3>
                                    <p>
                                        La vegetación original del municipio era selva media, pero debido a la actividad humana,
                                        actualmente predominan pastizales, cultivos agrícolas y vegetación secundaria. En las
                                        zonas costeras y alrededor de las lagunas se encuentran manglares y tulares.
                                    </p>
                                    <p>
                                        La fauna es variada y rica, destacando especies como el manatí, cocodrilo, tortuga marina,
                                        garza blanca, pelícano, gaviota, pato silvestre, iguana, armadillo, mapache, entre otros.
                                        En las aguas del Golfo de México y las lagunas se encuentran diversas especies de peces como
                                        robalo, mojarra, pargo, camarón y ostión, que son aprovechados por la actividad pesquera local.
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
                                        <h3>Datos Geográficos</h3>

                                        <h4>Coordenadas:</h4>
                                        <p>
                                            18° 23′ 45″ N, 93° 12′ 51″ O
                                        </p>
                                        <Divider />
                                        <h4>Altitud:</h4>
                                        <p>
                                            10 metros sobre el nivel del mar
                                        </p>
                                        <Divider />
                                        <h4>Superficie:</h4>
                                        <p>
                                            577.55 km²
                                        </p>
                                        <Divider />
                                        <h4>Región:</h4>
                                        <p>
                                            Chontalpa
                                        </p>
                                        <Divider />
                                        <h4>Colindancias:</h4>
                                        <p>
                                            Norte: Golfo de México
                                        </p>
                                        <p>
                                            Sur: Comalcalco y Jalpa de Méndez
                                        </p>
                                        <p>
                                            Este: Centla
                                        </p>
                                        <p>
                                            Oeste: Comalcalco
                                        </p>

                                    </Card>
                                </Col>

                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <Card>
                                            <h3>Mapa de Paraíso</h3>
                                            <>
                                                <Image
                                                    width={"100%"}
                                                    src="https://tools.paintmaps.com/og_image/map_cropping/4-102075775-1.jpeg"
                                                />
                                                <p>
                                                    Mapa del municipio de Paraíso, Tabasco
                                                </p>
                                            </>
                                        </Card>
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
