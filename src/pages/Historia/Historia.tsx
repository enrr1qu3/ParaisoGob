import { Col, ConfigProvider, Row, Card, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import "./Historia.css";

export default function Historia() {
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
                                    },
                                ]}
                        />
                        <h2>Historia de Paraíso</h2>
                        <p>Conoce los orígenes y desarrollo histórico de nuestro municipio</p>

                    </Card>
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
                                <article>
                                    <h4>Orígenes</h4>
                                    Orígenes
                                    Paraíso es un municipio del estado mexicano de Tabasco, localizado en la región del río Grijalva y en la subregión de la Chontalpa. Su extensión es de 577.55 km², los cuales corresponden al 1.5% del total del estado; esto coloca al municipio en el decimoséptimo lugar en extensión territorial, lo que lo hace el más pequeño de los municipios de Tabasco.

                                    Se dice que en el año 10,000 a.c. los primeros hombres cruzaron por el estrecho de Bering y llegaron a las costas del Golfo de México, donde hoy se le conoce como Paraíso. La ciudad recibió su nombre debido a que Cristóbal Colón la denominó como su "Paraíso encontrado".

                                    Toponimia
                                    Existen dos teorías sobre el origen del nombre de Paraíso:

                                    Se cree que el nombre de la ciudad proviene del nombre del "árbol de paraíso" o "Gracia de Dios", el cual abundaba mucho en la zona donde se fundó la población. Cabe destacar que contamos con una bebida muy rica y fresca llamada pozol, una bebida de cacao y agua.
                                    Otra teoría de su nombre es la abundante flora y fauna que existe en dicha zona, lo que hace alusión a un paraíso en el edén, como se conoce a Tabasco, "El edén de México".
                                    Época Prehispánica
                                    La región donde hoy se asienta Paraíso estuvo habitada por grupos olmecas y posteriormente por la cultura maya-chontal. Los chontales desarrollaron importantes centros ceremoniales y comerciales en la zona, aprovechando su ubicación estratégica en la costa del Golfo de México.

                                    Época Colonial
                                    Durante la conquista española, esta región fue explorada por expediciones que buscaban rutas comerciales. La riqueza natural de la zona atrajo a colonizadores que establecieron haciendas y desarrollaron actividades agrícolas y ganaderas.

                                    Paraíso Contemporáneo
                                    Actualmente, Paraíso es un importante centro económico en Tabasco. Al norte colinda con el Golfo de México, siendo su principal fuente de ingresos económicos la pesca, la industria petrolera y el turismo. Cuenta con una población de aproximadamente 96,741 habitantes y se localiza en la margen izquierda del río Seco.

                                    Se encuentra a una distancia de 78 km al noroeste de la ciudad de Villahermosa, capital del estado. Se comunica a través de la autopista estatal La Isla-Dos Bocas y está a 20 km de Comalcalco y a 58 km de Heroica Cárdenas.

                                    Desarrollo Petrolero
                                    Un capítulo fundamental en la historia reciente de Paraíso es el desarrollo de la industria petrolera. La construcción del Puerto de Dos Bocas y las instalaciones petroleras han transformado significativamente la economía y el paisaje del municipio, convirtiéndolo en un punto estratégico para la industria energética nacional.
                                </article>
                            </Card>
                        </Col>

                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '35%' }}
                        >
                            <Row
                                gutter={[8, 16]}
                            >
                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Datos Relevantes</h3>

                                    </Card>
                                </Col>
                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Galería Histórica</h3>

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
