import { Col, ConfigProvider, Row, Card, Breadcrumb, Table, Button, } from 'antd';
import { FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

export const TransparenciaArchivoMunicipal = () => {
    const data = [
        {
            name: "PADA 2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ARCHIVO MUNICIPAL/PADA 2025.pdf",

        },
        {
            name: "INFORME ANUAL 2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ARCHIVO MUNICIPAL/INFORME ANUAL 2024.pdf",

        },
        {
            name: "REGLAS DE OPERACIÓN DEL GI 2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ARCHIVO MUNICIPAL/REGLAS DE OPERACIÓN DEL GI 2024.pdf",

        },
        {
            name: "ACTA PRIMERA SO DEL GI",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ARCHIVO MUNICIPAL/ACTA PRIMERA SO DEL GI 2025.pdf",

        },
        {
            name: "ACTA 2DA SESIÓN ORDINARIA DEL GI",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ARCHIVO MUNICIPAL/ACTA 2DA SESIÓN ORDINARIA DEL GI.pdf",

        },
    ]

    const columns: ColumnsType<any> = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',

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
                                        title: 'Archivo Municipal',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Archivo Municipal
                        </h2>
                        <p className='subtituloP'>
                            Informacion para la ciudadanía
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >   <Card>

                        <Row gutter={[8, 8]} justify={"center"}>
                            <h3 style={{ color: "#1a4b8c" }}>
                                TITULAR DEL DEPARTAMENTO DE ARCHIVO MUNICUPAL
                            </h3>
                            <Col
                                xs={{ flex: '100%' }}
                                xl={{ flex: '100%' }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: "100%" }} >
                                    <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                        Lic. Ana Rosa Domínguez Pérez
                                    </p>
                                    <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                        Calle Ignacio Comonfort s/n, Col. Centro. Palacio de los Deportes C.. 86605
                                    </p>
                                </div>
                            </Col>
                            <h3 style={{ color: "#1a4b8c" }}>
                                GRUPO INTERDISCIPLINARIO:
                            </h3>
                            <Col
                                xs={{ flex: '100%' }}
                                xl={{ flex: '100%' }}
                            >
                                <Row gutter={[8, 8]} justify={"center"} style={{ textAlign: "center" }}>

                                    <Col
                                        xs={{ flex: '100%' }}
                                        xl={{ flex: '33.3%' }}
                                    >
                                        <h3 style={{ color: "#1a4b8c" }}>
                                            Director de asuntos juridicos
                                        </h3>
                                        <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                            Lic. Javier Rodríguez Hernández
                                        </p>
                                    </Col>

                                    <Col
                                        xs={{ flex: '100%' }}
                                        xl={{ flex: '33.3%' }}
                                    >
                                        <h3 style={{ color: "#1a4b8c" }}>
                                            Director de programación
                                        </h3>
                                        <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                            Ing. Arturo Izquierdo Alejandro
                                        </p>
                                    </Col>

                                    <Col
                                        xs={{ flex: '100%' }}
                                        xl={{ flex: '33.3%' }}
                                    >
                                        <h3 style={{ color: "#1a4b8c" }}>
                                            Contralor Municipal
                                        </h3>
                                        <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                            Ing. Isaac López Guerra
                                        </p>
                                    </Col>

                                    <Col
                                        xs={{ flex: '100%' }}
                                        xl={{ flex: '33.3%' }}
                                    >
                                        <h3 style={{ color: "#1a4b8c" }}>
                                            Titular del departamento de mejora regulatoria
                                        </h3>
                                        <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                            Lic María Del Carmen Gonzalez Rabanales
                                        </p>
                                    </Col>
                                    <Col
                                        xs={{ flex: '100%' }}
                                        xl={{ flex: '33.3%' }}
                                    >
                                        <h3 style={{ color: "#1a4b8c" }}>
                                            Titular de la unidad de transparencia y protección de datos personales
                                        </h3>
                                        <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                            L.A. Oscar Agusto Pérez Carrillo
                                        </p>
                                    </Col>
                                    <Col
                                        xs={{ flex: '100%' }}
                                        xl={{ flex: '33.3%' }}
                                    >
                                        <h3 style={{ color: "#1a4b8c" }}>
                                            Titular del departamento de tecnologias de la información
                                        </h3>
                                        <p style={{ color: "#fd8108", fontWeight: "bold", }}>
                                            L.I.A Miguel Ramón Domínguez
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>

                </Col>


                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card

                    >
                        <Table
                            dataSource={data}
                            size="small"
                            columns={columns}
                            rowKey={(record) => record.nombre}
                            scroll={{ x: 'max-content' }}
                        />

                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}