import { Col, ConfigProvider, Row, Card, Breadcrumb, Table, Button, } from 'antd';
import { FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

export default function TransparenciaUEDMPage() {

    const dataUEDM = [
        {
            nombre: "PAEM2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/PAEM%202025.pdf",
        },
        {
            nombre: "ACTA DE LA PRIMERA SESION EXTRAORDINARIA UEDM",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA%20DE%20LA%20PRIMERA%20SESION%20EXTRAORDINARIA%20UEDM.pdf",
        },
        {
            nombre: "ACTA DE LA PRIMERA SESION DE LA UEDM.pdf",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA%20DE%20LA%20PRIMERA%20SESION%20DE%20LA%20UEDM.pdf",
        },
        {
            nombre: "ACTA DE INSTALACION Y PUNTO DE ACUERDO.pdf",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA%20DE%20INSTALACION%20Y%20PUNTO%20DE%20ACUERDO.pdf",
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
                                        title: 'Unidad de Evaluacion del Desempeño Municipal UEDM',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Unidad de Evaluacion del Desempeño Municipal UEDM
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
