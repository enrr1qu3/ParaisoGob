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
        {
            nombre: "MANUAL DE ORGANIZACIÓN 2024 - 2027",
            ano: "2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/MANUAL%20DE%20ORGANIZACI%C3%93N%20PARA%C3%8DSO%2024-27.pdf",
        },
        {
            nombre: "MANUAL DE PROCEDIMIENTOS 2024 - 2027",
            ano: "2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/MANUAL%20DE%20PROCEDIMIENTOS%20PARA%C3%8DSO%2024-27.pdf",
        },
        {
            nombre: "REGLAS DE OPERACIÓN DE ATAÚDES Y/O SERVICIOS FUNERARIOS 2025",
            ano: "2025",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/REGLAS%20DE%20OPERACION%20ATAUD%202025.pdf",
        },
        {
            nombre: "CONSTITUCIÓN POLÍTICA DE LOS ESTADOS UNIDOS MEXICANOS (CPEUM)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/CONSTITUCION%20POLITICA%20DE%20LOS%20ESTADOS%20UNIDOS%20MEXICANOS%20CPEUM%20ACTUAL.pdf",
        },
        {
            nombre: "CONSTITUCIÓN POLÍTICA DEL ESTADO LIBRE Y SOBERANO DE TABASCO",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/Constitucion-Politica-del-Estado%20Libre%20y%20Soberano%20de%20Tabasco.pdf",
        },
        {
            nombre: "LEY DE COORDINACIÓN FISCAL (LCF)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/LEY%20DE%20COORDINACI%C3%93N%20FISCAL%20LCF.pdf",
        },
        {
            nombre: "LEY DE OBRAS PÚBLICAS Y SERVICIOS RELACIONADOS CON LAS MISMAS DEL ESTADO DE TABASCO (LOPSRM)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/LEY%20DE%20OBRAS%20PUBLICAS%20Y%20SERVICIOS%20RELACIONADOS%20CON%20LAS%20MISMAS%20%20DEL%20ESTADO%20DE%20TABASCO%20LOPSRM.pdf",
        },
        {
            nombre: "LEY FEDERAL DE DERECHOS 2025 (LFD)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/LEY%20FEDERAL%20DE%20DERECHOS%202025%20LFD.pdf",
        },
        {
            nombre: "LEY ORGÁNICA DE LOS MUNICIPIOS DEL ESTADO DE TABASCO",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/LEY%20ORGANICA%20DE%20LOS%20MUNICIPIOS%20DEL%20ESTADO%20DE%20TABASCO%20ACTUAL.pdf",
        },
        {
            nombre: "PRESUPUESTO DE EGRESOS DE LA FEDERACIÓN PARA EJERCICIO FISCAL (PEF 2025)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/PRESUPUESTO%20DE%20EGRESOS%20DE%20LA%20FEDERACION%20PARA%20EJERCIO%20FISCAL%20PEF%202025.pdf",
        },
        {
            nombre: "REGLAMENTO DE LA LEY DE OBRAS PÚBLICAS Y SERVICIOS RELACIONADOS CON LAS MISMAS (LOPSRM)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/REGLAMENTO%20DE%20LA%20LEY%20DE%20OBRAS%20PUBLICAS%20Y%20SERVICIOS%20RELACIONADOS%20CON%20LAS%20MISMAS%20LOPSRM.pdf",
        },
        {
            nombre: "REGLAMENTO DE LA LEY DEL SECTOR DE HIDROCARBUROS (RSH)",
            ano: "2026",
            archivo: "https://gobparaiso.blob.core.windows.net/transparencia/NORMATIVIDAD%20MUNICIPAL/REGLAMENTO%20DE%20LA%20LEY%20DE%20SECTOR%20DE%20HIDROCARBUROS%20RSH.pdf",
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