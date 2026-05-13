import { Col, ConfigProvider, Row, Card, Breadcrumb, Button, Collapse } from 'antd';
import { FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import Table, { ColumnsType } from 'antd/es/table';
import type { CollapseProps } from 'antd';

const BASE_URL = "https://gobparaiso.blob.core.windows.net/tramites-y-servicios/Tr%C3%A1mites%20de%20las%20Oficial%C3%ADas%20del%20Registro%20Civil";

interface Tramite {
    nombre: string;
    archivo: string;
}

const columns: ColumnsType<Tramite> = [
    {
        title: 'Nombre del trámite',
        dataIndex: 'nombre',
        key: 'nombre',
    },
    {
        title: 'Archivo',
        key: 'archivo',
        dataIndex: 'archivo',
        width: "2%",
        render: (e: string) =>
            e && (
                <Button
                    icon={<FilePdfOutlined />}
                    href={e}
                    target="_blank"
                />
            ),
        align: 'center',
    },
];

// ── Datos de trámites agrupados por categoría ──

const tramitesNacimiento: Tramite[] = [
    { nombre: "Asentamientos menores de un año", archivo: `${BASE_URL}/Asentamientos%20menores%20de%20un%20a%C3%B1o.pdf` },
    { nombre: "Asentamiento extemporáneo de niños", archivo: `${BASE_URL}/Asentamiento%20extempor%C3%A1neo%20de%20ni%C3%B1os.pdf` },
    { nombre: "Asentamiento extemporáneo de adultos", archivo: `${BASE_URL}/Asentamiento%20extempor%C3%A1neo%20de%20adultos.pdf` },
    { nombre: "Certificación de acta de nacimiento", archivo: `${BASE_URL}/Certificaci%C3%B3n%20de%20acta%20de%20nacimiento.pdf` },
    { nombre: "Constancia positiva o negativa de nacimiento", archivo: `${BASE_URL}/Constancia%20positiva%20o%20negativa%20de%20nacimiento.pdf` },
    { nombre: "Reconocimiento administrativo", archivo: `${BASE_URL}/Reconocimiento%20administrativo.pdf` },
    { nombre: "Reconocimiento por sentencia", archivo: `${BASE_URL}/Reconocimiento%20por%20sentencia.pdf` },
    { nombre: "Inscripción de asentamiento extranjero", archivo: `${BASE_URL}/Inscripci%C3%B3n%20de%20asentamiento%20extranjero.pdf` },
];

const tramitesMatrimonio: Tramite[] = [
    { nombre: "Registro de matrimonio civil", archivo: `${BASE_URL}/Registro%20de%20matrimonio%20civil.pdf` },
    { nombre: "Certificación de acta de matrimonio", archivo: `${BASE_URL}/Certificaci%C3%B3n%20de%20acta%20de%20matrimonio.pdf` },
    { nombre: "Constancia positiva o negativa de matrimonio", archivo: `${BASE_URL}/Constancia%20positiva%20o%20negativa%20de%20matrimonio.pdf` },
];

const tramitesDefuncion: Tramite[] = [
    { nombre: "Registro de defunción", archivo: `${BASE_URL}/Registro%20de%20defunci%C3%B3n.pdf` },
    { nombre: "Certificación de acta de defunción", archivo: `${BASE_URL}/Certificaci%C3%B3n%20de%20acta%20de%20defunci%C3%B3n.pdf` },
    { nombre: "Orden de sepultura", archivo: `${BASE_URL}/Orden%20de%20sepultura.pdf` },
    { nombre: "Orden de traslado", archivo: `${BASE_URL}/Orden%20de%20traslado.pdf` },
];

const tramitesDivorcio: Tramite[] = [
    { nombre: "Divorcio administrativo", archivo: `${BASE_URL}/Divorcio%20administrativo.pdf` },
    { nombre: "Divorcio por sentencia judicial", archivo: `${BASE_URL}/Divorcio%20por%20sentencia%20judicial.pdf` },
    { nombre: "Certificación de acta de divorcio", archivo: `${BASE_URL}/Certificaci%C3%B3n%20de%20acta%20de%20divorcio.pdf` },
];

const tramitesAdopcion: Tramite[] = [
    { nombre: "Inscripción de Actas de adopción", archivo: `${BASE_URL}/Inscripci%C3%B3n%20de%20Actas%20de%20adopci%C3%B3n.pdf` },
    { nombre: "Certificación de acta de adopción", archivo: `${BASE_URL}/Certificaci%C3%B3n%20de%20acta%20de%20adopci%C3%B3n.pdf` },
];

const tramitesOtros: Tramite[] = [
    { nombre: "Búsqueda de archivos generales", archivo: `${BASE_URL}/B%C3%BAsqueda%20de%20archivos%20generales.pdf` },
    { nombre: "Adquisición lote de panteón y expedición de título", archivo: `${BASE_URL}/Adquisici%C3%B3n%20lote%20de%20pante%C3%B3n%20y%20expedici%C3%B3n%20de%20t%C3%ADtulo.pdf` },
    { nombre: "Cesión de derecho de bódeva", archivo: `${BASE_URL}/Cesi%C3%B3n%20de%20derecho%20de%20b%C3%B3deva.pdf` },
];

const TableTramites = ({ data }: { data: Tramite[] }) => (
    <Table
        dataSource={data}
        size="small"
        columns={columns}
        rowKey={(record) => record.nombre}
        scroll={{ x: 'max-content' }}
        pagination={false}
    />
);

export default function RegistroCivilPage() {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Nacimiento y Asentamientos',
            children: <TableTramites data={tramitesNacimiento} />,
        },
        {
            key: '2',
            label: 'Matrimonio',
            children: <TableTramites data={tramitesMatrimonio} />,
        },
        {
            key: '3',
            label: 'Defunción y Sepultura',
            children: <TableTramites data={tramitesDefuncion} />,
        },
        {
            key: '4',
            label: 'Divorcio',
            children: <TableTramites data={tramitesDivorcio} />,
        },
        {
            key: '5',
            label: 'Adopción',
            children: <TableTramites data={tramitesAdopcion} />,
        },
        {
            key: '6',
            label: 'Otros Trámites y Servicios',
            children: <TableTramites data={tramitesOtros} />,
        },
    ];

    return (
        <ConfigProvider>
            <Row
                style={{
                    maxWidth: "87.5rem",
                    width: "100%",
                    margin: "2rem auto",
                    padding: "0 1rem",
                }}
                gutter={[0, 24]}
            >
                <Col xs={{ flex: '100%' }} xl={{ flex: '100%' }}>
                    <Card>
                        <Breadcrumb
                            separator=">"
                            items={[
                                {
                                    href: '/',
                                    title: (
                                        <>
                                            <HomeOutlined />
                                            <span>Inicio</span>
                                        </>
                                    ),
                                },
                                {
                                    title: 'Trámites del Registro Civil',
                                    className: 'tituloPincipalColor',
                                },
                            ]}
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className="tituloP tituloPincipalColor">
                            Trámites de las Oficialías del Registro Civil
                        </h2>
                        <p className="subtituloP">
                            Catálogo de trámites y servicios disponibles en las Oficialías del Registro Civil del municipio de Paraíso, Tabasco.
                        </p>
                    </Card>
                </Col>

                <Col xs={{ flex: '100%' }} xl={{ flex: '100%' }}>
                    <Card>
                        <Row gutter={[24, 8]}>
                            <Col xs={{ flex: '100%' }} xl={{ flex: '50%' }}>
                                <Card>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <h2>Oficialía 01</h2>
                                        <article style={{ fontSize: "1rem", fontWeight: "600" }}>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Titular: </span> Lic. Martín de la Cruz Carrillo
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Correo electrónico: </span> registrocivilparaiso01y02@gmail.com
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Atención: </span> Lunes a Viernes de 8:00 a 16:00 h. Sábados de 9:00 a 12:00 h.
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Domicilio: </span> Calle Ignacio Comonfort S/N, Paraíso, Tabasco. Palacio Municipal, planta baja. C.P. 86600.
                                            </p>
                                        </article>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={{ flex: '100%' }} xl={{ flex: '50%' }}>
                                <Card>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <h2>Oficialía 02</h2>
                                        <article style={{ fontSize: "1rem", fontWeight: "600" }}>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Titular: </span> Lic. Martha Angélica Mendiola Gutiérrez
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Correo electrónico: </span> registrocivilparaiso01y02@gmail.com
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Atención: </span> Lunes a Viernes de 8:00 a 16:00 h. Sábados de 9:00 a 12:00 h.
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: "700", color: "#691a30" }}>Domicilio: </span> Calle 1ro de Mayo S/N, esq. 16 de Septiembre, Villa Puerto Ceiba, Paraíso, Tabasco. C.P. 86610.
                                            </p>
                                        </article>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col xs={{ flex: '100%' }} xl={{ flex: '100%' }}>
                    <Card>
                        <Collapse
                            size="large"
                            items={items}
                            defaultActiveKey={['1']}
                        />
                    </Card>
                </Col>
            </Row>
        </ConfigProvider>
    );
}
