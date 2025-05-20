import { Col, ConfigProvider, Row, Card, Breadcrumb, Image, List } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import "./CabildoPage.css";
export default function CabildoPage() {
    const inteCabildo = [
        {
            nombre: "Lic. María Eliza Hernández Flores",
            puesto: "Segunda Regidora y Sindico de Hacienda",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/maestra maria/mtra maria 05.jpg"
        },
        {
            nombre: "Lic. Misleida Magaña Flores",
            puesto: "Tercer Regidor",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/lic misdeila/lic 05.jpg"
        },
        {
            nombre: "C. Selena del Carmen Gómez Chacha",
            puesto: "Cuarta Regidora",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/LIC SELENA/05.jpg"
        },
        {
            nombre: "C. Israel Palma Rodríguez",
            puesto: "Quinto Regido",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/LIC ISRRAEL/ISRRA 05.jpg"
        },
    ]
    const inteDirecciones = [
        {
            nombre: "Dr. Ramón Enrique Ballhaus Chávez",
            puesto: "Secretaría del Ayuntamiento",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/dr ballaus/05.jpg"
        },
        {
            nombre: "C.P. Mireya Mandujano Rubert",
            puesto: "Dirección de Finanzas",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/CP MIRELLA/CP MIRELLA 06.jpg"
        },
        {
            nombre: "Ing. Arturo Izquierdo Alejandro",
            puesto: "Dirección de Programación",
            imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/LIC ARTURO IZQ/LIC ARTURO 06.jpg"
        },
        {
            nombre: "Ing. Isaac López Guerra",
            puesto: "Contraloría Municipal",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Santiago Magaña Burelo",
            puesto: "Dirección de Desarrollo",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/desarrollo.jpg"
        },
        {
            nombre: "TSU. Carlos Mario de la Cruz Hernández",
            puesto: "Dirección de Fomento Económico y Turismo",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/fomento-1.jpg"
        },
        {
            nombre: "Ing. Edison García Wilzon",
            puesto: "Dirección de Obras, Ordenamiento Territorial y Servicios Municipales",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/obras.jpg"
        },
        {
            nombre: "Lic. Marco Ernesto Pérez Torres",
            puesto: "Dirección de Educación, Cultura y Recreación",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/decur-1.jpg"
        },
        {
            nombre: "Lic. Demetrio Velázquez Castellanos",
            puesto: "Dirección de Administración",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/Administracion-1.jpg"
        },
        {
            nombre: "Arq. Rafael Lezama Javier",
            puesto: "Dirección de Seguridad Pública",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/seguridad-publica.jpg"
        },
        {
            nombre: "Tec. Otilio Baeza Ocampo",
            puesto: "Dirección de Tránsito",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/transito.jpg"
        },
        {
            nombre: "Lic. Javier Rodríguez Hernández",
            puesto: "Dirección de Asuntos Jurídicos",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/asuntos-juridicos.jpg"
        },
        {
            nombre: "Tec. Felipe Alejandro Alejandro",
            puesto: "Dirección de Atención Ciudadana",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/atencion-ciudadana.jpg"
        },
        {
            nombre: "Lic. Claudia Lorena Montalvo Wilson",
            puesto: "Dirección de Atención a las Mujeres",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/atencion-mujer.jpg"
        },
        {
            nombre: "Quim. Leonardo Caamal Yam",
            puesto: "Dirección de Protección Ambiental y Desarrollo Sustentable",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/porteccion-ambiental.jpg"
        }
    ];
    const inteUnidadesApoyo = [
        {
            nombre: "Lic. Nelson Alonso Pérez Pérez",
            puesto: "Secretaría Técnica",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/02/tecnico.png"
        },
        {
            nombre: "Ing. Ronny Castellanos Magaña",
            puesto: "Secretaría Particular",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/particular.jpg"
        },
        {
            nombre: "Ing. Limberg Domínguez Hernández",
            puesto: "Coordinación de Protección Civil",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Tec. Concepción Pérez Márquez",
            puesto: "Coordinación del DIF",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Dr. Guillermo Valencia Gómez",
            puesto: "Coordinación de Atención a la Salud",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Julia Janeth Madrigal Domínguez",
            puesto: "Coordinación de Comunicación Social",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Andrés Izquierdo Morales",
            puesto: "Coordinación de Evaluación de Resultados",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Arq. Emilio Gómez Gallegos",
            puesto: "Instituto Municipal de Planeación",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Biol. Jorge Enrique Oyosa Ortiz",
            puesto: "Coordinación de Eventos Especiales",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Marian Kayle Alejandro de la Cruz",
            puesto: "Coordinación Administrativa",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Óscar Augusto Pérez Carrillo",
            puesto: "Unidad de Transparencia y Protección de Datos Personales",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Ana Rosa Domínguez Pérez",
            puesto: "Archivo Municipal",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Julio César Jiménez Cruz",
            puesto: "Registro Civil 01",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Marta Angélica Mendiola Gutiérrez",
            puesto: "Registro Civil 02",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Tec. Luis Lázaro Hernández",
            puesto: "Departamento de Delegados",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Tec. Freddy Martínez Aguilar",
            puesto: "Departamento de Asuntos Religiosos",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Michelle Andrea Escobar Camacho",
            puesto: "Subdirección de Catastro",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Ing. William Hernández Javier",
            puesto: "Coordinación de Fiscalización y Normatividad",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Profr. Celso Fernando Cauich May",
            puesto: "Coordinación de Cultura",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Geovani Cruz Angulo",
            puesto: "Coordinación de Fomento Deportivo",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "---",
            puesto: "Coordinación de Recursos Materiales",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Ing. Otoniel Palma Santiago",
            puesto: "Departamento de Licitaciones",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. María del Rosario Jesús Arias",
            puesto: "Departamento de Bienes Patrimoniales",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Lic. Adalberto Domínguez Vargas",
            puesto: "Departamento de Recursos Humanos",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
        {
            nombre: "Eladio Trujillo Alejandro",
            puesto: "Ramo 33",
            imagen: "https://paraiso.gob.mx/wp-content/uploads/2025/01/paraiso-1024x1024.jpg"
        },
    ]

    return (
        <ConfigProvider
        // theme={{
        //     components: {
        //         Divider: {
        //             marginLG: 16
        //         },
        //     },
        // }}
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
                        className='cardContainerTitulo'
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
                                        title: 'Cabildo Municipal',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Cabildo Municipal
                        </h2>
                        <p className='subtituloP'>
                            Conoce a los integrantes del Honorable Cabildo del Municipio de Paraíso
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card>
                        <Row
                            gutter={[8, 8]}
                        >
                            <Col
                                xs={{ flex: '100%' }}
                                xl={{ flex: '100%' }}
                            >
                                <h2 className='tituloCartas' >
                                    Primer Regidor y Presidente Municipal
                                </h2>
                            </Col>
                            <Col
                                xs={{ flex: '100%' }}
                                md={{ flex: '30%' }}
                                xl={{ flex: '20%' }}
                                className='contenImagenes'
                            >
                                <Image
                                    // width={200}
                                    src="https://gobparaiso.blob.core.windows.net/fotoscabildo/Ing Baca/2.jpg"
                                    style={{ borderRadius: "5%", width: "100%" }}
                                />
                            </Col>
                            <Col
                                xs={{ flex: '100%' }}
                                md={{ flex: '70%' }}
                                xl={{ flex: '80%' }}
                            >
                                <h3
                                    className='nombrePresidete'
                                >
                                    Ing. Alfonso Jesús Baca Sevilla
                                </h3>
                                <p className='textoPresidente'>
                                    Presidente Municipal Constitucional de Paraíso, Tabasco para el periodo 2024-2027.
                                </p>
                                <Card
                                    style={{ backgroundColor: "#f9fafb" }}
                                >
                                    <h4 className='tituloMensaje'>
                                        Mensaje del Presidente:
                                    </h4>
                                    <p className='textMensaje'>
                                        "Trabajamos con transparencia y compromiso para hacer de Paraíso un municipio
                                        próspero, seguro y con mejores oportunidades para todos sus habitantes.
                                        Nuestra administración está enfocada en el desarrollo sustentable, la
                                        modernización de los servicios públicos y el bienestar de las familias
                                        paraiseñas."
                                    </p>
                                </Card>
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
                        <h2 className='tituloCartas'>
                            Integrantes del H.Cabildo
                        </h2>
                        <Row gutter={[8, 8]}>
                            {inteCabildo.map((itegrante) =>
                                <Col
                                    xs={{ flex: '100%' }}
                                    md={{ flex: '50%' }}
                                    xl={{ flex: '50%' }}
                                    key={itegrante.nombre}
                                >
                                    <Card
                                        style={{
                                            textAlign: "center",
                                        }}

                                    >
                                        <Image
                                            src={itegrante.imagen}
                                            style={{ borderRadius: "50%" }}
                                            width={120}
                                        />
                                        <h4 className='tituloPuestos'>{itegrante.puesto}</h4>
                                        <p className='textoPresidente'>{itegrante.nombre}</p>
                                    </Card>
                                </Col>
                            )}

                        </Row>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card
                    >
                        <h2 className='tituloCartas'>
                            DIRECCIONES
                        </h2>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 3,
                                xxl: 3,
                            }}
                            dataSource={inteDirecciones}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card
                                        style={{
                                            textAlign: "center",
                                        }}

                                    >
                                        <Image
                                            width={120}
                                            src={item.imagen}
                                            style={{ borderRadius: "50%" }}
                                        />
                                        <h4 className='tituloPuestos'>{item.puesto}</h4>
                                        <p className='textoPresidente'>{item.nombre}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card
                    >
                        <h2 className='tituloCartas'>
                            UNIDADES DE APOYO
                        </h2>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 3,
                                xxl: 3,
                            }}
                            dataSource={inteUnidadesApoyo}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card
                                        style={{
                                            textAlign: "center",
                                        }}

                                    >
                                        <Image
                                            width={150}
                                            height={193}
                                            src={item.imagen}
                                            style={{ borderRadius: "50%" }}
                                        />
                                        <h4 className='tituloPuestos'>{item.puesto}</h4>
                                        <p className='textoPresidente'>{item.nombre}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />

                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}
