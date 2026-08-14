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
        {
            nombre: "FAISMUN - TDR FAISMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/1. Tdr FAISMUN.pdf",
        },
        {
            nombre: "FAISMUN - RESUMEN EJECUTIVO EEP FAISMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/2. Resumen ejecutivo EEP FAISMUN Paraiso.pdf",
        },
        {
            nombre: "FAISMUN - FORMATO DE DIFUSION FAISMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/3. FORMATO DE DIFUSION FAISMUN.pdf",
        },
        {
            nombre: "FAISMUN - EEP PARAISO FISM 2024",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/4. EEP_Paraiso_FISM_2024_V12.pdf",
        },
        {
            nombre: "FORTAMUN - TDR FORTAMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/1. Tdr FORTAMUN.pdf",
        },
        {
            nombre: "FORTAMUN - RESUMEN EJECUTIVO EVALUACION DESEMPEÑO FORTAMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/2. Resumen ejecutivo EVALUACION DESEMPEÑO FORTAMUN.pdf",
        },
        {
            nombre: "FORTAMUN - FORMATO DE DIFUSION FORTAMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/3. FORMATO DE DIFUSION FORTAMUN.pdf",
        },
        {
            nombre: "FORTAMUN - EVALUACION ESPECIFICA DE DESEMPEÑO FORTAMUN",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPEÑO_MUNICIPAL/4. EVALUACION ESPECIFICA DE DESEMPEÑO FORTAMUN.pdf",
        },
        {
            nombre: "PAEM 2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/PAEM_2026.pdf",
        },
        {
            nombre: "TdR FAISMUN 2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/TdR%20FAISMUN%202026.pdf",
        },
        {
            nombre: "TdR FORTAMUN 2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/TdR%20FORTAMUN%202026.pdf",
        },
        {
            nombre: "Evaluación de Consistencia y Resultados FORTAMUN 2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/Evaluaci%C3%B3n%20de%20Consistencia%20y%20Resultados%20FORTAMUN%202025.pdf",
        },
        {
            nombre: "Evaluación de Indicadores FAISMUN 2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/Evaluaci%C3%B3n%20de%20Indicadores%20FAISMUN%202025.pdf",
        },
        {
            nombre: "Formato Difusion Ev Indicadores 2025 Paraiso",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/Formato%20Difusion%20Ev%20Indicadores%202025%20Paraiso.pdf",
        },
        {
            nombre: "Formato_Difusion _PARAISO_ EVALCYR FORTAMUN 2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/Formato_Difusion%20_PARAISO_%20EVALCYR%20FORTAMUN%202025.pdf",
        },
        {
            nombre: "Resumen ejecutivo Ev Indicadores 2025 Paraiso",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/Resumen%20ejecutivo%20Ev%20Indicadores%202025%20Paraiso.pdf",
        },
        {
            nombre: "Resumen Ejecutivo_FORTAMUN_PARAISO 2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/UNIDAD_EVALUACION_DESEMPE%C3%91O_MUNICIPAL/Resumen%20Ejecutivo_FORTAMUN_PARAISO%202025.pdf",
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
                                        title: 'Unidad de Evaluación del Desempeño Municipal UEDM',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Unidad de Evaluación del Desempeño Municipal UEDM
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
