import { Col, ConfigProvider, Row, Card, Breadcrumb, Table, Button, } from 'antd';
import { FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';


export const TransparenciaHidrocarburos = () => {
    const data = [
        {
            proyecto: "OPM57",
            obra: "REHABILITACION DE RED DE AGUA ENTUBADA EN CALLE EL POSTECITO, EN LA RANCHERIA ORIENTE SEGUNDA SECCIÓN (PALMA HUACA), DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2023)",
            localidad: "270140049. RA. ORIENTE 2DA. SECCION . (PALMA HUACA).",
            contrato: "CO-PA-HIDRCTERR-022-2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-022-2024_OBRA_OPM57_redacted.pdf",
            archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POSTECITO.pdf"
        },
        {
            proyecto: "OPM56",
            obra: "REHABILITACION DE CALLE A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2 A FINOS, (UBICACIÓN ENTRADA LOS GÓMEZ) EN LA RANCHERIA LAS FLORES PRIMERA SECCIÓN, DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2023)",
            localidad: "270140009. RA. LAS FLORES 1RA. SECCION",
            contrato: "CO-PA-HIDRCMAR-021-2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-021-2024_OBRA_OPM56_redacted.pdf",
            archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_RECEPCION_FISICA_LOS_GOMEZ.pdf",
        },
        {
            proyecto: "OPM59",
            obra: "REHABILITACION DE CALLE A BASE DE CONCRETO ASFALTICO EN CALIENTE (UBICACIÓN ENTRADA AL BACHILLER), EN LA RANCHERÍA POTRERITOS DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2024)",
            localidad: "270140026. RA. POTRERITOS",
            contrato: "CO-PA-HIDRCMAR-024-2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-024-2024_OBRA_OPM59_redacted.pdf",
            archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POTRERITO.pdf",
        },
        {
            proyecto: "OPM58",
            obra: "REHABILITACION DE CAMINO A BASE DE CONCRETO ASFALTICO EN CALIENTE EN EL EJIDO OCCIDENTE SAN FRANCISCO, DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2024)",
            localidad: "270140050. EJ. OCCIDENTE (SAN FRANCISCO).",
            contrato: "CO-PA-HIDRCTERR-023-2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-023-2024_OBRA_OPM58_redacted.pdf",
            archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_SAN_FRANCISCO.pdf",
        },
        {
            proyecto: "KAM52",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN LA COLONIA EL BELLOTE (MIGUEL DE LA MADRID), UBICADA ENTRADA ANTES LA PANGA) DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140004. COL EL BELLOTE. (MIGUEL DE LA MADRID).",
            contrato: "CO-PA-R23MAR-007-2025"
        },
        {
            proyecto: "KAM53",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN EL EJIDO ANDRES GARCIA (LA ISLA) DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140045. EJ. ANDRES GARCIA (LA ISLA)",
            contrato: "CO-PA-R23TER-008-2025"
        },
    ]
    const columns: ColumnsType<any> = [
        {
            title: 'Proyecto No.',
            dataIndex: 'proyecto',
            key: 'proyecto',

        },
        {
            title: 'Obra',
            dataIndex: 'obra',
            key: 'obra',
            width: "400px",
        },
        {
            title: 'Localidad',
            dataIndex: 'localidad',
            key: 'localidad',

        },
        {
            title: 'Contrato',
            dataIndex: 'contrato',
            key: 'contrato',

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
        {
            title: 'Actas de entrega',
            key: 'archivoFisico',
            dataIndex: 'archivoFisico',

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
                                        title: 'Ramo 23 Hidrocarburos. Art. 72 LGCG',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Ramo 23 Hidrocarburos. Art. 72 LGCG
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