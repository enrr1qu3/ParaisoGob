import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "./style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
export default function Noticia() {
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
                    <Button icon={<ArrowLeftOutlined />} >
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
                                <h2>
                                    Paraíso Presenta Proyectos Estratégicos ante CONAGUA
                                </h2>

                                <img
                                    src={
                                        "../../public/noticia3.jpg"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <p>
                                    Las gestiones que realizamos hoy son por el futuro y beneficio de los habitantes de Paraíso. Agradecemos a CONAGUA por su respaldo a nuestros proyectos. - Alfonso Baca Sevilla

                                    Este jueves, en las instalaciones de CONAGUA en la Ciudad de México, el municipio de Paraíso, representado por su presidente municipal, el Ing. Alfonso Baca Sevilla, y el director de Obras Públicas, Ing. Edison García Wilzon, presentó proyectos clave ante el organismo nacional. El objetivo es impulsar iniciativas que impacten positivamente en la urbanización, el medio ambiente, el cuidado del agua y la preservación del legado para las futuras generaciones, proyectos que el "Gobierno en Movimiento" está llevando a cabo.

                                    Durante la reunión, en la que participaron el gerente nacional de CONAGUA, el ingeniero Julio Alafita Manzanares, y la coordinadora, la maestra Rocío Salinas Prado, el presidente Baca expuso proyectos como el rescate del Río Seco, el embellecimiento urbano y la construcción de muelles en el ejido Banco en Chiltepec, El Bellote, Puerto Ceiba, Nicolás Bravo 4ta. Sección, Paso El Chivero en Libertad Primera y La Unión 2da. Sección.

                                    Estas obras representan una oportunidad para impulsar el turismo, generar empleo, proteger las especies nativas de flora y fauna, y relanzar a Paraíso como un destino gastronómico destacado en la costa de Tabasco.

                                    En la exposición, también se contó con la participación virtual del Ing. Luis Arturo Cabrera de CONAGUA Tabasco, quien respaldó los proyectos.  El ingeniero Baca destacó la importancia del rescate del Río Seco, una tarea que su administración ha abordado mediante la limpieza de sus márgenes. Además, resaltó la necesidad de construir plantas de tratamiento de agua y expresó su intención de establecer alianzas con todos los niveles de gobierno e instancias relevantes para asegurar el éxito de los proyectos planteados.

                                    Por su parte, el gerente nacional de CONAGUA, el Ing. Julio Alafita, dio la bienvenida al alcalde y al director, y expresó el apoyo total del organismo a los proyectos presentados.

                                    Al concluir la gira de trabajo, el presidente Baca agradeció la hospitalidad, la atención y la respuesta favorable. Manifestó su gratitud por el apoyo recibido, que acelerará los trabajos que su administración pretende llevar a cabo, dejando un legado en beneficio de todos los habitantes de Paraíso, un compromiso que reafirmó con la convicción de hacerlo realidad durante su mandato.
                                </p>
                                <div>
                                    Galeria de imagenes
                                </div>

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
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    )
}
