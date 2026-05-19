import { Col, ConfigProvider, Row, Card, Breadcrumb, Table, Button, } from 'antd';
import { FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

export const TransparenciaNormaMuncipal = () => {
    const dataUEDM = [
        {
            nombre: "REGLAMENTO DE PROTECCIÓN CIVIL",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/10.Reglamento-de-protecciòn-civil.pdf",
        },
        {
            nombre: "CÓDIGO DE ÉTICA",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/5.Còdigo-de-ètica.pdf",
        },
        {
            nombre: "REGLAMENTO DE CABILDO",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/6.Reglamento-de-cabildo.pdf",
        },
        {
            nombre: "BANDO DE POLICÍA Y GOBIERNO",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/7.Bando-de-policìa.pdf",
        },
        {
            nombre: "REGLAMENTO DE TRÁNSITO",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/8.Reglamento-de-trànsito.pdf",
        },
        {
            nombre: "REGLAMENTO DE ADMINISTRACIÓN",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/9.Reglamento-de-administraciòn.pdf",
        },
        {
            nombre: "MANUAL DE CONTROL INTERNO",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD MUNICIPAL/71.manual-de-control-interno-2024.pdf",
        },
        {
            nombre: "TABULADOR DE SUELDOS Y REMUNERACIONES",
            ano: "2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Tabulador de Sueldos y Remuneraciones de los Servidores Publicos 2024/TABULADOR DE SUELDOS Y REMUNERACIONES.pdf",
        },
    ]
    const columns: ColumnsType<any> = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',

        },
        {
            title: 'Año',
            dataIndex: 'ano',
            key: 'ano',

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
                                        title: 'Normatividad Municipal',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Normatividad Municipal
                        </h2>
                        <p className='subtituloP'>
                            Información para la ciudadanía
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