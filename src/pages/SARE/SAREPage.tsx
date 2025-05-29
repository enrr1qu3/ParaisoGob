import { Col, ConfigProvider, Row, Card, Breadcrumb, Button } from 'antd';
import { FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import Table, { ColumnsType } from 'antd/es/table';
export default function SAREPage() {
    const dataUEDM = [
        {
            nombre: "FORMATO ÚNICO DE APERTURA",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/TRAMITES Y SERVICIOS/Formato-Unico-de-AperturA.pdf",
        },
        {
            nombre: "CATÁLOGO DE GIROS DE BAJO RIESGO DEL SARE",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/TRAMITES Y SERVICIOS/Catalogo-de-giros-de-bajo-riesgo-del-SARE.pdf",
        },
        {
            nombre: "REGLAMENTO DEL SARE",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/TRAMITES Y SERVICIOS/Reglamento del SARE de Paraíso, Tab..pdf",
        },
        {
            nombre: "MANUAL DE PROCEDIMIENTOS PARA LA OPERACIÓN DEL SARE",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/TRAMITES Y SERVICIOS/Manual de Procedimientos para la Operación del SARE, Paraíso,Tab..pdf",
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
                                        title: ' SARE ',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            SARE
                        </h2>
                        <p className='subtituloP'>
                            Sistema de Apertura Rápida de Empresa
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card >
                        <Row gutter={[8, 8]}>
                            <Col
                                xs={{ flex: '100%' }}
                                xl={{ flex: '35%' }}
                            >
                                <img style={{ width: "400px", borderRadius: "10px" }}
                                    src="https://gobparaiso.blob.core.windows.net/transparencia/TRAMITES%20Y%20SERVICIOS/LOGO-SARE.jpg"
                                    alt="SARELogo"
                                />
                            </Col>
                            <Col
                                xs={{ flex: '100%' }}
                                xl={{ flex: '60%' }}
                            >
                                <article
                                    style={{ fontSize: "1rem", fontWeight: "600", textAlign:"justify" }}
                                >
                                    <p style={{ marginTop: 0 }} >
                                        El SARE es el conjunto de acciones de la administración pública municipal
                                        para que, en su ámbito de competencia, las micro, pequeñas y medianas
                                        empresas (MIPYMES), que impliquen bajo riesgo para la salud y al medio
                                        ambiente, puedan obtener su Certificado de Funcionamiento SARE para
                                        Establecimiento Comercial, en un periodo máximo de 3 días hábiles y con tan
                                        solo 2 visitas al Módulo SARE para la gestión de los trámites.
                                    </p>
                                    <p style={{ marginBottom: 0 }}>

                                        El SARE será aplicable a los giros económicos establecidos en el Catálogo de
                                        Giros de Bajo Riesgo, y a las consideraciones factibles que para tal efecto
                                        determine el Manual de Procedimientos para la Operación del SARE, mismo
                                        que forma parte del Reglamento.
                                    </p>
                                </article>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card >
                        <Table
                            dataSource={dataUEDM}
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
