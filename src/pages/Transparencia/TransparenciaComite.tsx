import { Col, ConfigProvider, Row, Card, Breadcrumb, Table, Button, Avatar, } from 'antd';
import { FilePdfOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';


export default function TransparenciaComite() {
    const dataUEDM = [
        {
            nombre: "ACTA DE INSTALACION Y TOMA DE PROTESTA",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/RESOLUCIONES_COMITE_TRANSPARENCIA/ACTA DE INSTALACION Y TOMA DE PROTESTA.pdf",
        },
        {
            nombre: "ACTA SO-01-2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/RESOLUCIONES_COMITE_TRANSPARENCIA/ACTA SO-01-2025 (1).pdf",
        },
        {
            nombre: "SE-01-2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/RESOLUCIONES_COMITE_TRANSPARENCIA/SE-01-2025.pdf",
        },
        {
            nombre: "SE-02-2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/RESOLUCIONES_COMITE_TRANSPARENCIA/SE-02-2025.pdf",
        },
        {
            nombre: "SO-01-2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/RESOLUCIONES_COMITE_TRANSPARENCIA/SO-01-2024.pdf",
        },
    ]
    const columns: ColumnsType<any> = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',

        },
        {
            title: 'Archivo',
            key: 'archivo',
            dataIndex: 'archivo',
            width: "2%",
            render: (e: any) => (
                (e) && < Button
                    icon={< FilePdfOutlined />}
                    href={e}
                    target="_blank"
                />
            ),
            align: 'center',
        },
    ];
    return (
        <ConfigProvider
        >
            <Row
                style={{
                    maxWidth: "87.5rem",
                    width: "100%",
                    margin: "2rem auto",
                    padding: " 0 1rem ",

                }}
                gutter={[0, 24]}

            >

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card

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
                                        title: 'Informacion Publica',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Informacion Publica
                        </h2>
                        <p className='subtituloP'>
                            Informacion para la ciudadanía
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card

                    >
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
                                                <h3 className='tituloCarta'>Secretario Técnico</h3>
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

                        <h3 className="tituloSecundariInicio">
                            Resoluciones del Comité de Transparencia
                        </h3>
                        <Table
                            dataSource={dataUEDM}
                            size="small"
                            columns={columns}
                            rowKey={(record) => record.nombre}
                            scroll={{ x: 'max-content' }}
                        />

                        <h3 className="tituloSecundariInicio">
                            Estrados Electrónicos
                        </h3>
                        <div style={{ marginBottom: 20 }}>
                            <Row gutter={[8, 8]} justify={"center"}>
                                <Col
                                    xs={{ flex: "100%" }}
                                    xl={{ flex: "20%" }}
                                >
                                    <a target="_blank" href="http://www.itaip.org.mx/site/"
                                    >
                                        <Card style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <img src="https://transparencia.comalcalco.gob.mx/src/itaip_logo.png"
                                                alt="itaip"
                                                style={{ width: "100%" }}
                                            />
                                        </Card>
                                    </a>
                                </Col>

                                <Col
                                    xs={{ flex: "100%" }}
                                    xl={{ flex: "70%" }}
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
                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}