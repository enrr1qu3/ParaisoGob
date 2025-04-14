import { UserOutlined } from '@ant-design/icons';
import "./style/Transparencia.css";
import { Avatar, Card, Col, Row } from 'antd';
export const TransparenciaInicio = () => {
    return (
        <div className="contenedorInicio">
            <h2 className="tituloInicio">
                Portal de Transparencia y Acceso a la Información
                Ayuntamiento Constitucional de Paraíso, Tabasco
            </h2>
            <div className="contenedorSujetos">
                <h3 className="tituloSecundariInicio">
                    <UserOutlined />
                    Comité de Transparencia
                </h3>
                <Row gutter={[16, 16]}>
                    <Col
                        xs={{ flex: "100%" }}
                        xl={{ flex: "33%" }}
                    >
                        <Card>
                            <Row gutter={[24, 16]} justify={"center"}>
                                <Col
                                    xs={{ flex: "20%" }}
                                    xl={{ flex: "20%" }}
                                >
                                    <Avatar size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xs={{ flex: "100%" }}
                                    xl={{ flex: "60%" }}
                                >
                                    <h3 className='tituloCarta'>Presidente del Comité de Transparencia</h3>
                                    <p className='pCarta'>Ing. Isaac López Guerra</p>
                                    {/* <p>Ver más...</p> */}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col
                        xs={{ flex: "100%" }}
                        xl={{ flex: "33%" }}
                    >
                        <Card>
                            <Row gutter={[24, 16]} justify={"center"}>
                                <Col
                                    xs={{ flex: "20%" }}
                                    xl={{ flex: "20%" }}
                                >
                                    <Avatar size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xs={{ flex: "100%" }}
                                    xl={{ flex: "60%" }}
                                >
                                    <h3 className='tituloCarta'>Secretario  Técnico</h3>
                                    <p className='pCarta'>Lic. Javier Hernández Rodríguez</p>
                                    {/* <p>Ver más...</p> */}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col
                        xs={{ flex: "100%" }}
                        xl={{ flex: "33%" }}
                    >
                        <Card>
                            <Row gutter={[24, 16]} justify={"center"}>
                                <Col
                                    xs={{ flex: "20%" }}
                                    xl={{ flex: "20%" }}
                                >
                                    <Avatar size={100} icon={<UserOutlined />} />
                                </Col>
                                <Col xs={{ flex: "100%" }}
                                    xl={{ flex: "60%" }}
                                >
                                    <h3 className='tituloCarta'>Vocal del Comité</h3>
                                    <p className='pCarta'>Ing. Arturo Izquierdo Alejandro</p>
                                    {/* <p>Ver más...</p> */}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{ marginBottom: 20 }}>
                <Row gutter={[8, 8]} justify={"center"}>
                    <Col
                        xs={{ flex: "100%" }}
                        xl={{ flex: "100%" }}
                    >
                        <Card style={{ backgroundColor: "#e3effe" }}>
                            <Row gutter={[8, 8]} justify={"center"}>
                                <Col
                                    xs={{ flex: "100%" }}
                                    xl={{ flex: "60%" }}
                                >
                                    <h2 className='tituloLinkT'>
                                        Información publicada
                                        del municipio de Paraíso
                                    </h2>
                                    <p className='pLinkT'>
                                        Ley de Transparencia y Acceso a la
                                        Información, Artículo 76 y 78
                                    </p>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <a
                                            className='aLinkT'
                                            target="_blank"
                                            href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio"
                                        >
                                            CONSULTAR
                                        </a>
                                    </div>
                                </Col>
                                <Col
                                    xs={{ flex: "100%" }}
                                    xl={{ flex: "30%" }}
                                >
                                    <img src="https://transparencia.comalcalco.gob.mx/src/transparencia_logo.png"
                                        width={"100%"}
                                        alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* <div>
                <h3>
                    Comité de Transparencia del Municipio de Paraíso
                </h3>
                <div>

                </div>
            </div> */}
        </div>
    )
}
